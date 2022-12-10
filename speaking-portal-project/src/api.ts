import express, { Request, Response } from 'express'
import multer from 'multer'
import fs from 'fs'
import { main } from './index'
const app = express()
const ffmpeg = require('fluent-ffmpeg')
const upload = multer({
    storage: multer.diskStorage({
        // Specify the directory where the files should be saved
        destination: (req, file, cb) => {
            cb(null, './tmp')
        },
    }),
})

app.post(
    '/kukarella/generate-video',
    upload.fields([
        { name: 'audio', maxCount: 1 },
        { name: 'text', maxCount: 1 },
    ]),
    async (req: Request, res: Response) => {
        // Check if req.files is defined
        if (!req.files) {
            return res.status(400).send('No files were uploaded.')
        }

        // Retrieve the uploaded files from the Request object... Couldn't get typescript to be happy with this :(
        // @ts-ignore
        const audioFile = req.files['audio'][0]
        // @ts-ignore
        const textFile = req.files['text'][0]
        // Could do this once files are generated, but i think its fine to define here.
        const audioPath = `./tmp/${audioFile.filename}.wav`
        const textPath = `./tmp/${textFile.filename}.txt`
        // Retrieve language parameter
        // TODO: Maybe add some input validation? But its coming from kukarella so... should be fine
        const recognizer = req.body.recognizer ? req.body.recognizer : 'English (U.S.)'
        // Set a general filename for temp files to be generated as
        /* TODO: decide on a way to store the temp files. This method works, but there is likely an improved way
            of organizing this. We could use the username of the client inputting information alongside something like a
            given project name, however, I have concerns as to whether or not this would ensure unique temporary
            directories. We don't want to be accidentally returning incorrect files.
        */
        const filename = audioFile.filename
        console.log(audioFile, textFile, recognizer)

        // Convert received temp file to .txt file for rhubarb
        fs.readFile(textFile.path, (err: any, data: string | NodeJS.ArrayBufferView) => {
            if (err) {
                // Handle any errors that occur
                console.error(err)
                res.status(500).send('Text File was unreadable')
            } else {
                // rewrite temp file into format readable for rhubarb
                fs.writeFile(textPath, data, (writeErr) => {
                    if (writeErr) {
                        // Handle any errors that occur
                        console.error(writeErr)
                        res.status(500).send('An error occurred while writing the file.')
                    }
                })
            }
        })
        // Convert the received temp file into wav format for rhubarb & ffmpeg
        ffmpeg(audioFile.path)
            .format('wav')
            .save(audioPath)
            .on('error', (err: any) => {
                // Handle any errors that occur
                console.error(err)
                res.status(500).send('An error occurred while converting the file to WAV.')
            })
            .on('end', async () => {
                // Once all files have been converted we can start the rhubarb process
                // Return not required
                await main(audioPath, textPath, recognizer, filename)

                res.set('Content-Type', 'video/mp4')
                // Read the video file from the file system and return it as the response
                res.sendFile(`${filename}.mp4`, { root: './tmp' })
                // Cleanup
                res.on('finish', () => {
                    //TODO: Add the JSON file when we figure out where it is, unless its being deleted elsewhere
                    //fs.unlinkSync(`tmp/${filename}.json`)
                    const temp_files = [
                        audioFile.path,
                        textFile.path,
                        audioPath,
                        textPath,
                        `tmp/${filename}.txt`,
                        `tmp/${filename}.mp4`,
                    ]
                    temp_files.forEach((file) => fs.unlinkSync(file))
                    console.log('all files removed')
                })
            })
    },
)

const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

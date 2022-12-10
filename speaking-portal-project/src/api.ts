import express, { Request, Response } from 'express'
import multer from 'multer'
import fs from 'fs'
import { main } from './index'
import { cwd } from 'node:process'
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
    '/api/generate-video',
    upload.fields([
        { name: 'audio', maxCount: 1 },
        { name: 'text', maxCount: 1 },
    ]),
    async (req: Request, res: Response) => {
        // Check if req.files is defined
        if (!req.files) {
            return res.status(400).send('No files were uploaded.')
        }

        // Retrieve the uploaded files from the Request object
        // @ts-ignore
        const audioFile = req.files['audio'][0]
        const audioPath = `./tmp/${audioFile.filename}.wav`
        // @ts-ignore
        const textFile = req.files['text'][0]
        const textPath = `./tmp/${textFile.filename}.txt`
        // Retrieve language parameter
        const language = req.body.recognizer
        //Set a general filename
        const filename = audioFile.filename
        console.log(audioFile, textFile, language)
        // Convert temp file to .txt file
        await fs.readFile(textFile.path, (err: any, data: string | NodeJS.ArrayBufferView) => {
            if (err) {
                // Handle any errors that occur
                console.error(err)
                res.status(500).send('Text File was unreadable')
            } else {
                // Use fs.writeFile to write the file data to a new TXT file
                fs.writeFile(textPath, data, (writeErr) => {
                    if (writeErr) {
                        // Handle any errors that occur
                        console.error(writeErr)
                        res.status(500).send('An error occurred while writing the file.')
                    }
                })
            }
        })
        // Use ffmpeg's fluent-ffmpeg module to convert the file to WAV
        ffmpeg(audioFile.path)
            .format('wav')
            .save(audioPath)
            .on('error', (err: any) => {
                // Handle any errors that occur
                console.error(err)
                res.status(500).send('An error occurred while converting the file to WAV.')
            })
            .on('end', async () => {
                // Start rhubarb process
                console.log('Processing')
                const videoFile = await main(audioPath, textPath, language, filename)
                console.log(videoFile)
                res.set('Content-Type', 'video/mp4')

                // Read the video file from the file system and return it as the response
                res.sendFile(`${filename}.mp4`, { root: './tmp' })
                // Cleanup
                res.on('finish', () => {
                    fs.unlinkSync(audioFile.path)
                    fs.unlinkSync(textFile.path)
                    fs.unlinkSync(audioPath)
                    fs.unlinkSync(textPath)
                    console.log('inputs deleted, moving to outputs ')
                    //fs.unlinkSync(`tmp/${filename}.json`)
                    fs.unlinkSync(`tmp/${filename}.txt`)
                    fs.unlinkSync(`tmp/${filename}.mp4`)
                    console.log('all files removed')
                })
            })
    },
)

const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

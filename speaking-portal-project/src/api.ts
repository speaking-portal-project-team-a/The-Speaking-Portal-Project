import express, { Request, Response } from 'express'
import { getWavFile } from './animationFactory/ffmpeg'
import multer from 'multer'
import fs from 'fs'
import { main } from './index'
import { AvatarNames } from './types'
const app = express()
const PORT = 3000
const HOST = '0.0.0.0'

const upload = multer({
    storage: multer.diskStorage({
        // Specify the directory where the files should be saved
        destination: (req, file, cb) => {
            cb(null, './tmp')
        },
    }),
})
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

if (cluster.isPrimary) {
    /* Create as many workers as there are CPUs on the system.
    This allows for multiple processes to run at once
     */
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
} else {
    app.post(
        '/kukarella/generate-video',
        upload.fields([
            { name: 'audio', maxCount: 1 },
            { name: 'text', maxCount: 1 },
        ]),
        async (req: Request, res: Response) => {
            // Check if req.files is defined
            // @ts-ignore
            if (!req.files['audio'] || !req.files['text']) {
                return res.status(400).send('No files were uploaded.')
            }

            // Retrieve the uploaded files from the Request object
            // @ts-ignore
            const audioFile = req.files['audio'][0]
            // @ts-ignore
            const textFile = req.files['text'][0]

            const audioPath = `./tmp/${audioFile.filename}.wav`
            const textPath = `./tmp/${textFile.filename}.txt`
            // Retrieve language parameter
            const recognizer = req.body.recognizer ? req.body.recognizer : 'english'
            // Retrieve character selection
            const avatar = req.body.avatar ? req.body.avatar.toLowerCase() : AvatarNames[0]

            // Set a general filename for temp files to be generated as
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
            try {
                await getWavFile(audioFile.path, audioPath)
            } catch (err) {
                console.error(err)
                res.status(500).send('An error occurred while converting temp to wav')
            }
            try {
                await Promise.all([main(audioPath, textPath, recognizer, filename, avatar)])
                res.set('Content-Type', 'video/mp4')
                // Read the video file from the file system and return it as the response
                res.status(200).sendFile(`${filename}.mp4`, { root: './tmp' })
            } catch (err: any) {
                res.status(500).send('An error occurred with the main process.')
            }
            //Cleanup
            res.on('finish', () => {
                const temp_files = [
                    audioFile.path,
                    textFile.path,
                    audioPath,
                    textPath,
                    `tmp/${filename}.json`,
                    `tmp/${filename}.txt`,
                    `tmp/${filename}.mp4`,
                ]
                temp_files.forEach((file) => {
                    try {
                        fs.unlinkSync(file)
                    } catch (error: any) {
                        if (error.code != 'ENOENT') {
                            // If we run into an error deleting a file that is not of the Error No Entity type,
                            // throw it back!
                            throw error
                        }
                    }
                })
            })
            console.log('all files removed')
        },
    )

    app.listen(PORT, HOST, () => {
        console.log(`API listening on ${HOST}:${PORT}`)
    })
}

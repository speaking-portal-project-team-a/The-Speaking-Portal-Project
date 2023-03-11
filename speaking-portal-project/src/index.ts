import { rhubarbProcessor } from './phonemeFactory/rhubarb'
import { checkFiles } from './test/file_check'
import { mouthCuesToInputFile } from './animationFactory/animationProcessor'
import { getVideoExport } from './animationFactory/ffmpeg'
import { Timer } from './types'

// Main Function
export async function main(audio_path: string, text_path: string, language: string, filename: string, avatar: string) {
    try {
        const t = new Timer()

        console.log(`${t.getTotalTimeElapsed()} - Validating Files...`)
        t.setProcessStart(0)
        await checkFiles(audio_path, text_path)
        t.setProcessEnd(0)
        console.log(`${t.getTotalTimeElapsed()} - File Validation complete`)

        console.log(`${t.getTotalTimeElapsed()} - Running Rhubarb Processor...`)
        t.setProcessStart(1)
        const phonemeContents = await rhubarbProcessor(language, audio_path, text_path, filename)
        t.setProcessEnd(1)
        console.log(`${t.getTotalTimeElapsed()} - Rhubarb Lip Sync complete`)

        console.log(`${t.getTotalTimeElapsed()} - Converting timings to input file...`)
        t.setProcessStart(2)
        await mouthCuesToInputFile({ avatar: avatar, mouthCues: phonemeContents, outputPath: `tmp/${filename}.txt`, timer:t })
        t.setProcessEnd(2)
        console.log(`${t.getTotalTimeElapsed()} - Timing Conversion Complete`)


        console.log(`${t.getTotalTimeElapsed()} - Generating output video...`)
        t.setProcessStart(4)
        let vid = await getVideoExport(`${audio_path}`, `./tmp/${filename}.txt`, `./tmp/${filename}.mp4`)
        t.setProcessEnd(4)
        console.log(`${t.getTotalTimeElapsed()} - Generating Output Video Complete`)

        console.log("Time Elapsed per Process:")
        console.log(t.getProcessSummary())

        return vid

    } catch (err: any) {
        console.log(`${err}`)
    }
}

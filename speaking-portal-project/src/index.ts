import { rhubarbProcessor } from './phonemeFactory/rhubarb'
import { checkFiles } from './test/file_check'
import { mouthCuesToInputFile } from './animationFactory/animationProcessor'
import { ffmpegProcessor, getVideoExport } from './animationFactory/ffmpeg'

// Main Function
export async function main(audio_path: string, text_path: string, language: string, filename: string, avatar: string) {
    try {
        // Double check file validity
        console.log(`Validating Files...`)
        await checkFiles(audio_path, text_path)
        // Generate phoneme list
        console.log('Running Rhubarb Processor...')
        const phonemeContents = await rhubarbProcessor(language, audio_path, text_path, filename)
        // console.log('Phoneme Timings:',phonemeContents)
        // Generate ffmpeg image timings
        console.log('Converting timings to input file...')
        await mouthCuesToInputFile({ avatar: avatar, mouthCues: phonemeContents, outputPath: `tmp/${filename}.txt` })
        console.log('Generating output video...')
        return await getVideoExport(`${audio_path}`, `./tmp/${filename}.txt`, `./tmp/${filename}.mp4`)
    } catch (err: any) {
        console.log(`${err}`)
    }
}

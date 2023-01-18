import { rhubarbProcessor } from './phonemeFactory/rhubarb'
import { checkFiles } from './test/file_check'
import { mouthCuesToInputFile } from './animationFactory/mouthCueProcessor'
import { ffmpegProcessor } from './animationFactory/ffmpeg'

// Main Function
export async function main(audio_path: string, text_path: string, language: string, filename: string) {
    try {
        // Double check file validity
        console.log(`Validating Files...`)
        await checkFiles(audio_path, text_path)
        // Generate phoneme list
        console.log('Running Rhubarb Processor...')
        const phonemeContents = await rhubarbProcessor(language, audio_path, text_path, filename)
        // console.log('Printing phoneme timings from json file...')
        // console.log(phonemeContents)
        // Generate ffmpeg image timings
        console.log('Converting timings to input file...')
        await mouthCuesToInputFile({ mouthCues: phonemeContents, outputPath: `tmp/${filename}.txt` })
        console.log('Generating output video...')
        return await ffmpegProcessor(`${audio_path}`, `./tmp/${filename}.txt`, filename)
    } catch (err: any) {
        console.log(`${err}`)
    }
}

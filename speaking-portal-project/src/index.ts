import { rhubarbProcessor } from './phonemeFactory/rhubarb'
import { checkFiles } from './test/file_check'
import { mouthCuesToInputFile } from './phonemeFactory/mouthCueProcessor'
import { ffmpegProcessor } from './animationFactory/ffmpeg'

// Sets language option for testing based
const text_file_options: string[] = [
    'en-text.txt',
    'fr-text.txt',
    'jp-text.txt',
    'en-text.txt',
    'en-text.txt',
    'en-text.txt',
    'en-text.txt',
    'en-text.txt',
    'en-text.txt',
]
const audio_file_options: string[] = [
    'en-Amber.wav',
    'fr-Claude.wav',
    'jp-Ayumi.wav',
    'badformat.mp3',
    'corruptedfile.wav',
    'chipmunk.wav',
    'reverse.wav',
    'signalloss.wav',
    'cursed.wav',
]
const recognizer_options: string[] = [
    'English (U.S.)',
    'French',
    'Japanese',
    'English (U.S.)',
    'English (U.S.)',
    'English (U.S.)',
    'English (U.S.)',
    'English (U.S.)',
    'English (U.S.)',
]

// Main Function
export async function main(audio_path: string, text_path: string, language: string, filename: string) {
    //const case_number: number = 0

    // Received files are saved in the Rhubarb directory
    // The following variables will also be received:
    let audio_file_name: string = audio_path
    let text_file_name: string = text_path
    let selected_language: string = language

    try {
        // TODO: Check the files FIRST, THEN run Rhubarb
        console.log(`Validating Files...`)
        await checkFiles(audio_file_name, text_file_name)
        console.log('Running Rhubarb Processor...')
        const phonemeContents = await rhubarbProcessor(selected_language, audio_file_name, text_file_name, filename)

        console.log('Printing phoneme timings from json file...')
        console.log(phonemeContents)

        console.log('Converting timings to input file...')
        await mouthCuesToInputFile({ mouthCues: phonemeContents, outputPath: `tmp/${filename}.txt` })
        console.log('Generating output video...')
        return await ffmpegProcessor(`${audio_file_name}`, `./tmp/${filename}.txt`, filename)
    } catch (err: any) {
        console.log(`${err}`)
    }
}

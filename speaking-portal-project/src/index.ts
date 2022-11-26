import { chdir, cwd, kill } from 'node:process'
import { rhubarbProcessor } from './phonemeFactory/rhubarb'
import { checkFiles } from './test/file_check'
import { mouthCuesToInputFile } from './phonemeFactory/mouthCueProcessor'
import { ffmpegProcessor } from './animationFactory/ffmpeg'

// Sets language option for testing based
const text_file_options: string[] = ['en-text.txt', 'fr-text.txt', 'jp-text.txt']
const audio_file_options: string[] = ['en-Amber.wav', 'fr-Claude.wav', 'jp-Ayumi.wav']
const recognizer_options: string[] = ['English (U.S.)', 'French', 'Japanese']

// Main Function
async function main() {
    // TODO: Change language_selection based on desired language
    // English = 0, French = 1, Japanese = 2
    const language_selection: number = 0

    // Received files are saved in the Rhubarb directory
    // The following variables will also be received:
    let audio_file_name: string = audio_file_options[language_selection]
    let text_file_name: string = text_file_options[language_selection]
    let selected_language: string = recognizer_options[language_selection]

    if (!audio_file_name || !text_file_name || !selected_language) {
        console.log('Language Selection out of bounds\nLanguage set to English (U.S.)')
        audio_file_name = audio_file_options[0]
        text_file_name = text_file_options[0]
        selected_language = recognizer_options[0]
    }
    try {
        // TODO: Check the files FIRST, THEN run Rhubarb
        console.log(`Validating Files...`)
        await checkFiles(audio_file_name, text_file_name)
        console.log('Running Rhubarb Processor...')
        const phonemeContents = await rhubarbProcessor(selected_language, audio_file_name, text_file_name)

        console.log('Printing phoneme timings from json file...')
        console.log(phonemeContents)

        console.log('Converting timings to input file...')
        await mouthCuesToInputFile({ mouthCues: phonemeContents })
        console.log('Generating output video...')
        await ffmpegProcessor(`../rhubarb/${audio_file_name}`, 'input.txt')
    } catch (err: any) {
        console.log(`Error message: ${err}`)
    }
}

main()

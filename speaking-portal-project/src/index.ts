import { chdir, cwd, kill } from 'node:process'
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
    'peer_test.txt',
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
    'peer_test_1.wav',
]
const recognizer_options: string[] = ['English (U.S.)', 'French', 'Japanese','English (U.S.)','English (U.S.)','English (U.S.)','English (U.S.)','English (U.S.)','English (U.S.)','English (U.S.)']

// Main Function
async function main() {
    // TODO: Change case number during peer testing
    // English = 0, French = 1, Japanese = 2, Wrong file = 3, Corrupted file = 4, Unique files = 5|6|7|8
    const case_number: number = 9

    // Received files are saved in the Rhubarb directory
    // The following variables will also be received:
    let audio_file_name: string = audio_file_options[case_number]
    let text_file_name: string = text_file_options[case_number]
    let selected_language: string = recognizer_options[case_number]

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
        console.log(`${err}`)
    }
}

main()

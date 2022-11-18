import { chdir, cwd, kill } from 'node:process'
import { rhubarbProcessor } from "./phonemeFactory/rhubarb"
import { checkFiles } from "./test/file_check"
import {mouthCuesToInputFile} from "./phonemeFactory/mouthCueProcessor";
import { ffmpegProcessor } from './animationFactory/ffmpeg'

// Main Function
async function main () {

    // Received files will be saved in the Rhubarb directory
    // The following variables will also be received:
    const audio_file_name:string = 'en-Amber.wav'
    const text_file_name:string = 'en-text.txt'
    const selected_language:string = 'English (U.S.)'

    try{
        // TODO: Check the files FIRST, THEN run Rhubarb
        console.log(`Validating Files...`)
        await checkFiles(audio_file_name, text_file_name)

        console.log("Running Rhubarb Processor...")
        const phonemeContents = await rhubarbProcessor(selected_language, audio_file_name, text_file_name)

        console.log("Printing phoneme timings from json file...")
        console.log(phonemeContents)

        console.log("Converting timings to input file...")
        console.log(mouthCuesToInputFile({ mouthCues: phonemeContents }))
        console.log("Generating output video...")
        await ffmpegProcessor('../rhubarb/en-Amber.wav', 'input.txt')

    } catch (err: any) {
        console.log(`Error message: ${err}`)
    }
}

main()
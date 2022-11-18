import { stdout, chdir, cwd } from 'node:process'
import util from 'node:util'
import fs from 'fs'
import { MouthCue, MouthCueArray } from '../types'

const exec = util.promisify(require('node:child_process').exec)

// Rhubarb Processor takes audio and text file, produces json file with phoneme timings
export async function rhubarbProcessor (selected_language : string, audio_file_name : string, text_file_name : string ) {
    // Need child process verbose ? check out -> https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live

    // Commented this out because I changed the directory in src/test/file_check.ts
    // try {
    //     chdir('./rhubarb')
    // } catch(err) {
    //     console.log(`Error message: ${err}`)
    // }

    // Determine which recognizer to use based on language (English or non-English)
    var recognizer:string;
    selected_language.toLowerCase().includes('english') ? recognizer = 'pocketSphinx' : recognizer = 'phonetic'

    // Run Rhubarb child process
    const rhubarbCommand:string = `"./rhubarb" -o output.json --exportFormat json -r ${recognizer} -d ${text_file_name} --extendedShapes GX ${audio_file_name}`
    console.log(`Running command: + ${rhubarbCommand}`)
    const {stderr} = await exec(rhubarbCommand)

    if (stderr) {
        console.log(stderr)
    }
    const json = JSON.parse(fs.readFileSync('output.json', 'utf8'))
    const mouthCues: MouthCue[] = json.mouthCues as MouthCue[]

    return mouthCues
}
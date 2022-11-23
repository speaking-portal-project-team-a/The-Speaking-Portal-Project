import { stdout, chdir, cwd, exitCode } from 'node:process'
import { spawnSync } from 'node:child_process'
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

    const args = [
        "-o ","output.json",
        "--exportFormat","json",
        "-r ",`${recognizer}`,
        "-d",`${text_file_name}`,
        "--extendedShapes", "GX", `${audio_file_name}`
    ]

    const rhubarbProc = spawnSync('./rhubarb', args,)
    
    if(rhubarbProc.stderr){
        throw Error(`${rhubarbProc.stderr}`)
    }

    const json = JSON.parse(fs.readFileSync('output.json', 'utf8'))
    const mouthCues: MouthCue[] = json.mouthCues as MouthCue[]

    return mouthCues
}
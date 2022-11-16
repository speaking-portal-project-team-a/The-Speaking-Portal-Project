import { stdout, chdir, cwd } from 'node:process'
import util from 'node:util'
import fs from 'fs'
import { MouthCue, MouthCueArray } from '../types'

const exec = util.promisify(require('node:child_process').exec)

export async function rhubarbProcessor (audio_file_name : string, text_file_name ? : string ) {
     
    // Need child process verbose ? check out -> https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live
    try {
        chdir('./rhubarb')
    } catch(err) {
        console.log(`Error message: ${err}`)
    }

    // Run Rhubarb child process
    const {stderr} = await  exec(`"./rhubarb" -o output.json --exportFormat json -r pocketSphinx -d ${text_file_name} --extendedShapes GX ${audio_file_name}`)

    if (stderr) {
        console.log(stderr)
    }
    const json = JSON.parse(fs.readFileSync('output.json', 'utf8'))
    const mouthCues: MouthCue[] = json.mouthCues as MouthCue[]

    return mouthCues
}
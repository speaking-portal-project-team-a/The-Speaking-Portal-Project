import { stdout, chdir, cwd } from 'node:process'
import util from 'node:util'
import fs from 'fs'
import { MouthCue, MouthCueArray } from './types'

const exec = util.promisify(require('node:child_process').exec)

async function rhubarbProcessor (audio_file_name : string, text_file_name ? : string ) {
        
    console.log(`Starting directory: $${cwd()}`)

    // Need child process verbose ? check out -> https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live
    
    try {
        chdir('./rhubarb')
        console.log(`New directory: ${cwd()}`)
    } catch(err) {
        console.log(`Error message: ${err}`)
    }

    // Run Rhubarb child process
    
    console.log("Starting Rhubarb....")
    const {stderr} = await  exec(`"./rhubarb" -o output.json --exportFormat json -r pocketSphinx -d ${text_file_name} --extendedShapes GX ${audio_file_name}`)
    console.log("Rhubarb Complete....")

    if (stderr) {
        console.log(stderr)
    }
    // Retreive output from Rhubarb child process
    
    console.log("Extracting File Contents....")
    const json = JSON.parse(fs.readFileSync('output.json', 'utf8'))
    const mouthCues: MouthCue[] = json.mouthCues as MouthCue[]

    return mouthCues
}
   const phoneme =  rhubarbProcessor('en-Amber.wav','en-text.txt')



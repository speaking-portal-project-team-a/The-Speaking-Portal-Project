import { stdout, chdir, cwd } from 'node:process'
import util from 'node:util'
import fs from 'fs'

const exec = util.promisify(require('node:child_process').exec)

async function rhubarbProcessor (audio_file_name : string, text_file_name ? : string ) {
    
    console.log("Starting Rhubarb....")
    
    console.log(`Starting directory: $${cwd()}`)
// need child process verbose ? check out -> https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live
    try {
        chdir('./rhubarb')
        console.log(`New directory: ${cwd()}`)
    } catch(err) {
        console.log(`Error message: ${err}`)
    }

    const {stout, stderr} = await exec(`"./rhubarb" -o output.json --exportFormat json -r pocketSphinx -d ${text_file_name} --extendedShapes GX ${audio_file_name}`)

    const data = fs.readFileSync('output.json', 'utf8')

    const mouthCues = JSON.parse(data)

}
    rhubarbProcessor('en-Amber.wav','en-text.txt')





import { stdout, chdir, cwd } from 'node:process'
import util from 'node:util'
import fs from 'fs'
import { MouthCue, MouthCueArray } from '../types'

const exec = util.promisify(require('node:child_process').exec)
// TODO: Update parameters
export async function ffmpegProcessor (audio_file_name : string, text_file_name : string ) {

    // Need child process verbose ? check out -> https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live
    try {
        chdir('./ffmpeg')
    } catch(err) {
        console.log(`Error message: ${err}`)
    }

    // Run ffmpeg child process
    const {stderr} = await  exec(`"./ffmpeg" -f concat -i ${text_file_name} -i ${audio_file_name} -r 24 output.mp4`)

    if (stderr) {
        console.log(stderr)
    }
    //Todo: Return output

    return
}

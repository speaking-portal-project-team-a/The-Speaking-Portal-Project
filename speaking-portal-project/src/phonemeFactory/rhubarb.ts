import { stdout, chdir, cwd, exitCode } from 'node:process'
import { spawnSync } from 'node:child_process'
import util from 'node:util'
import fs from 'fs'
import { MouthCue, MouthCueArray } from '../types'

const exec = util.promisify(require('node:child_process').exec)

// Rhubarb Processor takes audio and text file, produces json file with phoneme timings
export async function rhubarbProcessor(selected_language: string, audio_file_name: string, text_file_name: string) {
    // Runs in the Rhubarb directory
    try {
        chdir('./rhubarb')
    } catch (err) {
        console.log(`Error message: ${err}`)
    }

    // Determine which recognizer to use based on language (English or non-English)
    var recognizer: string
    selected_language.toLowerCase().includes('english') ? (recognizer = 'pocketSphinx') : (recognizer = 'phonetic')

    // Arguments for Rhubarb command
    const args = [
        '-o ',
        'output.json',
        '--exportFormat',
        'json',
        '-r ',
        `${recognizer}`,
        '-d',
        `${text_file_name}`,
        '--extendedShapes',
        'GX',
        `${audio_file_name}`,
    ]

    const rhubarbProc = spawnSync('./rhubarb', args)

    if (rhubarbProc.stderr) {
        // Rhubarb returns this as an error but it's just a status message, so do NOT throw this as an error
        if(!rhubarbProc.stderr.includes(`Generating lip sync data for ${audio_file_name}.`)){
            throw Error(`${rhubarbProc.stderr}`)
        }
    }

    // Convert JSON to mouth cues
    const json = JSON.parse(fs.readFileSync('output.json', 'utf8'))
    const mouthCues: MouthCue[] = json.mouthCues as MouthCue[]

    // Return to original directory
    try {
        chdir('../')
    } catch (err) {
        console.log(`Error message: ${err}`)
    }
    return mouthCues
}

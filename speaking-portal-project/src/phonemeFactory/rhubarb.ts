import { stdout, chdir, cwd, exitCode } from 'node:process'
import { spawnSync } from 'node:child_process'
import util from 'node:util'
import fs from 'fs'
import { MouthCue, MouthCueArray } from '../types'

const exec = util.promisify(require('node:child_process').exec)

// Rhubarb Processor takes audio and text file, produces json file with phoneme timings
export async function rhubarbProcessor(
    selected_language: string,
    audio_file_name: string,
    text_file_name: string,
    output_file_name: string,
) {
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
        `../tmp/${output_file_name}.json`,
        '--exportFormat',
        'json',
        '-r ',
        `${recognizer}`,
        '-d',
        `.${text_file_name}`,
        '--extendedShapes',
        'GX',
        `.${audio_file_name}`,
    ]

    const rhubarbProc = spawnSync('./rhubarb', args)

    if (rhubarbProc.stderr) {
        // throw Error(`${rhubarbProc.stderr}`)
        // Rhubarb failures are tagged with [Fatal], marking a failed attempt to run, log these.
        if (rhubarbProc.stderr.includes(`[Fatal]`)) {
            throw Error(`${rhubarbProc.stderr}`)
        }
    }
    // Return to original directory
    try {
        chdir('../')
    } catch (err) {
        console.log(`Error switching directories: ${err}`)
    }

    if (rhubarbProc.status != 0) {
        console.log('exit code (status): ', rhubarbProc.status) // exit code of child process
        throw Error(`${rhubarbProc.stderr}`)
    }

    // Convert JSON to mouth cues
    const json = await JSON.parse(fs.readFileSync(`${cwd()}/tmp/${output_file_name}.json`, 'utf8'))
    return json.mouthCues as MouthCue[]
}

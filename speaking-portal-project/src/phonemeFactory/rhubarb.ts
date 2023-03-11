import { stdout, chdir, cwd, exitCode } from 'node:process'
import { spawnSync } from 'node:child_process'
import util from 'node:util'
import fs from 'fs'
import { MouthCue } from '../types'

const exec = util.promisify(require('node:child_process').exec)

// Rhubarb Processor takes audio and text file, produces json file with phoneme timings
export async function rhubarbProcessor(
    selected_language: string,
    audio_file_name: string,
    text_file_name: string,
    output_file_name: string,
) {
    // Rhubarb requires it be run in its directory

    // TODO: Examine chdir error further
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
        'GHX',
        `.${audio_file_name}`,
        '--threads 32',
    ]

    const rhubarbProc = spawnSync('./rhubarb', args)

    // Return to original directory

    // TODO: Examine chdir error further
    try {
        chdir('../')
    } catch (err) {
        console.log(`Error switching directories: ${err}`)
    }

    // TODO: Ensure Error is being captured in Unit Test / Set-up Rhubarb Error Type

    if (rhubarbProc.status != 0) {
        console.log('exit code (status): ', rhubarbProc.status) // exit code of child process
        throw Error(`${rhubarbProc.stderr}`)
    }

    // Convert JSON to mouth cues
    const json = await JSON.parse(fs.readFileSync(`${cwd()}/tmp/${output_file_name}.json`, 'utf8'))
    return json.mouthCues as MouthCue[]
}

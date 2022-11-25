import { stdout, chdir, cwd } from 'node:process'
import util from 'node:util'
import { MouthCue, MouthCueArray } from '../types'
import { spawnSync } from 'node:child_process'

export async function ffmpegProcessor(audio_file: string, text_file: string) {
    try {
        chdir('./ffmpeg')
    } catch (error) {
        console.log(`Error message: ${error}`)
    }
    const args = [
        '-f',
        'concat',
        '-i',
        `${text_file}`,
        '-i',
        `${audio_file}`,
        '-r',
        '24',
        '-pix_fmt',
        'yuv420p',
        'output.mp4',
    ]
    const ffmpegProc = spawnSync('ffmpeg', args)
    if (ffmpegProc.stderr) {
        //throw Error(`${ffmpegProc.stderr}`)
    }

    try {
        chdir('../')
    } catch (error) {
        console.log(`Error message: ${error}`)
    }

    // TODO: Change return type to the generated video file
    return
}

import { stdout, chdir, cwd } from 'node:process'
import util from 'node:util'
import { MouthCue, MouthCueArray } from '../types'
import { spawnSync } from 'node:child_process'

export async function ffmpegProcessor(audio_file: string, text_file: string, output_name: string) {
    const args = [
        '-f',
        'concat',
        '-safe',
        '0',
        '-i',
        `${text_file}`,
        '-i',
        `${audio_file}`,
        '-r',
        '24',
        '-pix_fmt',
        'yuv420p',
        `./tmp/${output_name}.mp4`,
    ]
    const ffmpegProc = spawnSync('ffmpeg', args)

    //TODO: Need to fix ffmpeg Error Handling

    if (ffmpegProc.stderr) {
        throw Error(`${ffmpegProc.stderr}`)
    } else {
        console.log('Output video generated sucessfully')
    }

    // TODO: Change return type to the generated video file
    return
}

// export async function ffmpegAPI(audio_file: string, text_file: string) {
//     const ffmpeg = require('fluent-ffmpeg')
//
// }

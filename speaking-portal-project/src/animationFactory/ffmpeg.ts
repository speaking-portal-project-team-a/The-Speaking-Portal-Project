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
    // This portion of the message is only included when ffmpeg is successful in generating a video
    if (!ffmpegProc.stderr.includes('Output #0, mp4')) {
        throw Error(`${ffmpegProc.stderr}`)
    } else {
        console.log('Output video generated sucessfully')
    }

    return `./tmp/${output_name}.mp4`
}
export async function audioConverter(audio_file: string) {
    const args = ['-i']
}

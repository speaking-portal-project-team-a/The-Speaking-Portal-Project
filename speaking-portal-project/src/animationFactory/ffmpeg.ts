import { stdout, chdir, cwd } from 'node:process'
import util from 'node:util'
import { MouthCue, MouthCueArray } from '../types'
import { spawnSync } from 'node:child_process'

export async function ffmpegProcessor(args: string[], fileType: string) {
    const ffmpegProc = spawnSync('ffmpeg', args)
    if (ffmpegProc.status != 0) {
        throw Error(`${ffmpegProc.stderr}`)
    } else {
        console.log('Output generated successfully')

    }
    return args.pop()
}
export async function getWavFile(audio_file: string, export_path: string) {
    const args = ['-i', `${audio_file}`, `${export_path}`]
    return ffmpegProcessor(args, 'wav')
}
export async function getVideoExport(audio_file: string, text_file: string, output_name: string) {
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
        '-s',
        '720x480', // added to avoid "width not divisible by 2" error
        '-pix_fmt',
        'yuv420p',
        `./tmp/${output_name}.mp4`,
    ]
    return ffmpegProcessor(args, 'mp4')
}

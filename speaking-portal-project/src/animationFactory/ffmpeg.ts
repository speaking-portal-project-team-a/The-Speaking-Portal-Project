import { stdout, chdir, cwd } from 'node:process'
import util from 'node:util'
import { MouthCue, MouthCueArray } from '../types'
import { spawnSync } from 'node:child_process'

export async function ffmpegProcessor(args: string[], fileType: string) {
    const ffmpegProc = spawnSync('ffmpeg', args)

    //TODO: Make sure error is being captured / Set up FFMPEG error type
    if (ffmpegProc.status != 0) {
        console.log('exit code (status): ', ffmpegProc.status) // exit code of child process
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
        '420x594', // added to avoid "width not divisible by 2" error. also, files are 842x1191 so it's scaled appropriately
        '-pix_fmt',
        'yuv420p',
        `${output_name}`,
    ]
    return ffmpegProcessor(args, 'mp4')
}

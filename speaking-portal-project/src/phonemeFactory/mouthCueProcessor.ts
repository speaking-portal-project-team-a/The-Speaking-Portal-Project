import { MouthCue, MouthCueArray } from '../types'
import fs from 'fs'

export async function mouthCuesToInputFile({
    mouthCues,
    outputPath = './tmp/input.txt',
}: {
    mouthCues: MouthCue[]
    outputPath?: string
}) {
    try {
        await fs.promises.writeFile(outputPath, generateMouthData(mouthCues), {
            flag: 'w',
        })
        /* Lines 17-20 for testing purposes only
        const contents = await fs.promises.readFile(outputPath, 'utf-8')
        console.log(contents);

        return contents
        */
    } catch (err) {
        console.log(err)
        return Error('MouthCuesFileError')
    }
}

/*
This converts  data from the MouthCue type into a format for ffmpeg
 */
export function generateMouthData(mouthCues: MouthCue[]) {
    let data = ''
    for (const mouthCuesKey in mouthCues) {
        let dur = (mouthCues[mouthCuesKey].end - mouthCues[mouthCuesKey].start).toFixed(2)
        let tempStr = `file ../images/${mouthCues[mouthCuesKey].value}.png\noutpoint ${dur}\n`
        data = data.concat(tempStr)
    }
    return data
}

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
    // TODO: Update this with new parameters for animation - things like movements & blinking.
    for (const mouthCuesKey in mouthCues) {
        /*
         Duration of frame to be shown calculated based on the mouth cue.
         If we have the duration of the mouth cue, we can mess around with the frames that are actually shown,
         provided each one is the correct mouth cue. The way to do this would be to potentially create a mouth cue
         directory, and within that directory have different frames such as blink/no blink, move eyebrows / no move
         etc etc... Will require some tinkering :)
         */
        let dur = (mouthCues[mouthCuesKey].end - mouthCues[mouthCuesKey].start).toFixed(2)
        let tempStr = `file ../images/${mouthCues[mouthCuesKey].value}.png\noutpoint ${dur}\n`
        data = data.concat(tempStr)
    }
    return data
}

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
    let lastBlink = -1
    // TODO: Update this with new parameters for animation - things like movements & blinking.
    console.log("Adding realism...")
    for (const mouthCuesKey in mouthCues) {
        /*
         Duration of frame to be shown calculated based on the mouth cue.
         If we have the duration of the mouth cue, we can mess around with the frames that are actually shown,
         provided each one is the correct mouth cue. The way to do this would be to potentially create a mouth cue
         directory, and within that directory have different frames such as blink/no blink, move eyebrows / no move
         etc etc... Will require some tinkering :)
         */
        let dur = (mouthCues[mouthCuesKey].end - mouthCues[mouthCuesKey].start).toFixed(2)
        let currentSec = parseInt(mouthCues[mouthCuesKey].start.toFixed(0))

        // TODO: use for testing. After confirming that blinking and other realism is good, delete this
        console.log("currentSec: %d, dur: %d, lastBlink: %d", currentSec, dur, lastBlink)

        /* BLINKING
        - 1 blink takes ~0.1s, so only consider frames less than 0.1s long (should we have a minimum?)
        - Humans typically blink 15-20 times per min, or once every 3-4 seconds
        - We want it to be random and not happen exactly once every 3 seconds, so let's say...
            - there's a 40% chance to blink every 4th second
            - there's a 40% chance to blink every 3rd second
            - and don't blink in the same second
        - Image naming scheme:
            _eyes0 = eyes open
            _eyes1 = eyes half open
            _eyes2 = eyes closed
        */
        let eyes:string = "_eyes0"
        if (parseInt(dur) < 0.1 && lastBlink != currentSec) {
            let n = Math.random()
            if ((n <= 0.4 && currentSec % 4 == 0) || (n > 0.4 && n <= 0.8 && currentSec % 3 == 0)) {
                eyes = "_eyes2"
                lastBlink = currentSec
            }
        }

        let tempStr = `file ../images/${mouthCues[mouthCuesKey].value}${eyes}.png\noutpoint ${dur}\n`
        data = data.concat(tempStr)
    }
    return data
}

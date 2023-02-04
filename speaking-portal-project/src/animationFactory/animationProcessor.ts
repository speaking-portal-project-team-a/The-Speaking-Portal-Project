import { Avatar, MouthCue, MouthCueArray } from '../types'
import fs from 'fs'

export async function mouthCuesToInputFile({
    avatar,
    mouthCues,
    outputPath = './tmp/input.txt',
}: {
    avatar: string
    mouthCues: MouthCue[]
    outputPath?: string
}) {
    try {
        await fs.promises.writeFile(outputPath, generateFrameData(avatar, mouthCues), {
            flag: 'w',
        })
        /* Lines 17-20 for testing purposes only
        const contents = await fs.promises.readFile(outputPath, 'utf-8')
        console.log(contents);

        return contents
        */
    } catch (err) {
        console.log(err)
        return Error('animationProcessor Error')
    }
}

/*
This converts  data from the MouthCue type into a format for ffmpeg
*/
export function generateFrameData(avatar: string, mouthCues: MouthCue[]) {
    let character = new Avatar(avatar)
    let frameData = ''

    console.log('Adding realism...')
    for (const mouthCuesKey in mouthCues) {
        // Duration of frame is calculated based on the mouth cue
        let frameDur = (mouthCues[mouthCuesKey].end - mouthCues[mouthCuesKey].start).toFixed(2)
        let currentSec = parseInt(mouthCues[mouthCuesKey].start.toFixed(0))

        // TODO: when testing idle animation and poses, add idling? lastPoseChange and breathPhase
        console.log('t=%d, frameDur: %d, lastBlink: %d, lastPoseChange: %d', currentSec, frameDur, character.eyes.lastBlink, character.body.lastPoseChange)

        character.updateState(currentSec, parseInt(frameDur), mouthCues[mouthCuesKey].value)

        // Build frame path
        frameData = frameData.concat(character.generateStateString(frameDur))
    }
    return frameData
}
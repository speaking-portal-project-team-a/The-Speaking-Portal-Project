
import { Avatar, MouthCue, Timer} from '../types'
import fs from 'fs'

// TODO: Add a unit test here
export async function mouthCuesToInputFile({
    avatar,
    mouthCues,
    outputPath = './tmp/input.txt',
    timer,
}: {
    avatar: string
    mouthCues: MouthCue[]
    outputPath?: string
    timer: Timer
}) {
    try {
        await fs.promises.writeFile(outputPath, generateFrameData(avatar, mouthCues, timer), {
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

export function generateFrameData(avatar: string, mouthCues: MouthCue[], timer: Timer) {

    let character = new Avatar(avatar)
    let frameData = ''

    console.log(`${timer.getTotalTimeElapsed()} - Adding realism...`)
    timer.setProcessStart(3)
    for (const mouthCuesKey in mouthCues) {
        // Duration of frame is calculated based on the mouth cue
        let frameDurStr = (mouthCues[mouthCuesKey].end - mouthCues[mouthCuesKey].start).toFixed(2)
        let frameDur = Number(frameDurStr)
        let currentSec = parseInt(mouthCues[mouthCuesKey].start.toFixed(0))
        let phoneme = mouthCues[mouthCuesKey].value
        // TODO: when testing idle animation and poses, add idling? lastPoseChange and breathPhase
        //console.log('t=%d, frameDur: %d, lastBlink: %d, lastPoseChange: %d', currentSec, frameDur, character.eyes.lastBlink, character.body.lastPoseChange)

        // For long pauses
        if (phoneme === 'X' && frameDur > 2) {
            // split long frame into multiple smaller ones
            const miniFrameDur = 0.07 // because blinking requires frames less than 0.8 seconds
            let numMiniFrames = Math.floor(frameDur/miniFrameDur)
            let lastMiniFrameDur = Number((frameDur - (numMiniFrames*miniFrameDur)).toFixed(2))

            // call updateState for each small frame
            for (let i = 1; i < numMiniFrames; i++){
                character.updateState(currentSec+Math.floor(i*miniFrameDur), miniFrameDur, phoneme, true)
                frameData = frameData.concat(character.generateStateString(String(miniFrameDur)))
            }
            // last frame (less than 0.07 seconds)
            character.updateState(currentSec+Math.floor(numMiniFrames*miniFrameDur), lastMiniFrameDur, phoneme, true)
            frameData = frameData.concat(character.generateStateString(String(lastMiniFrameDur)))

        } else {
            character.updateState(currentSec, frameDur, phoneme, false)
            frameData = frameData.concat(character.generateStateString(frameDurStr))
        }
    }
    timer.setProcessEnd(3)
    console.log(`${timer.getTotalTimeElapsed()} - Adding Realism Complete `)
    return frameData
}
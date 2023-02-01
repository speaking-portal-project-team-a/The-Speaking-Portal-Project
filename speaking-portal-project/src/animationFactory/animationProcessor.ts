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
    let character = new Avatar()

    let frameData = ''
    let blink = false
    let lastBlink = -1
    let lastPoseChange = -1
    let idle = true
    let breathPhase = 0 // 0 = rest, 1 = inhaling, 2 = lungs full, 3 = exhaling

    console.log('Adding realism...')
    for (const mouthCuesKey in mouthCues) {
        // Duration of frame is calculated based on the mouth cue
        let frameDur = (mouthCues[mouthCuesKey].end - mouthCues[mouthCuesKey].start).toFixed(2)
        let currentSec = parseInt(mouthCues[mouthCuesKey].start.toFixed(0))

        // TODO: when testing idle animation and poses, add idling? lastPoseChange and breathPhase
        //console.log('t=%d, frameDur: %d, lastBlink: %d', currentSec, frameDur, lastBlink)

        // Blinking
        blink = character.willBlink(currentSec, frameDur, lastBlink)
        if (blink) {
            lastBlink = currentSec
        }

        character.updateState(blink, mouthCues[mouthCuesKey].value /*TODO: Add arms param here once updated*/)

        // TODO: Implement Idling or Posing
        // if(idle){
        //     breathPhase = calculateBreathPhase(currentSec, lastPoseChange, breathPhase)
        //     frameData.concat(translateBreathFrame(breathPhase))
        // } else {
        //     breathPhase = 0
        //     // TODO: add poses
        // }

        // Build frame path
        frameData = frameData.concat(character.generateStateString(frameDur))
    }
    return frameData
}

function calculateBreathPhase(currentSec: number, lastPoseChange: number, breathPhase: number) {
    /**
     * Determines this frame's breath phase value based on time and most recent pose
     *
     * @remarks
     * - A normal respiratory rate in healthy adults is roughly 12 to 20 breaths per minute
     * - Our avatars' breathing cycle will take 4 seconds, which results in ~15 breaths/min
     * - Breathing Phases:
     *      0 = rest
     *      1 = inhaling or "breathing"
     *      2 = lungs full
     *      3 = exhaling or "breathing"
     *
     * @returns the new value of breathPhase
     *
     **/
    let result = breathPhase
    // ensures the idle pose changes occur every second rather than every frame
    if (lastPoseChange > currentSec) {
        result += 1
    }
    // check to reset breathPhase; values can only be 0 to 3.
    // TODO: Should this be a type?
    if (breathPhase == 4) {
        result = 0
    }
    return result
}

// TODO: if we make breathing a type, we can probably get rid of this function
function translateBreathFrame(breathPhase: number) {
    /**
     * Determines the idle animation frame (inhaling, exhaling, pausing) based on timing and whether the avatar is posing
     *
     * @remarks
     *
     * @param breathPhase - the current breathing phase of the avatar
     *
     * @returns A string to indicate the idle breathing frame
     *
     **/
    if (breathPhase == 0) {
        return '_rest' // rest, arms relaxed and down
    } else if (breathPhase == 1 || breathPhase == 3) {
        return '_breathing' // inhale and exhale (transition between rest and peak)
    } else {
        // == 2
        return '_lungsFull' // lungs are full, arms are out
    }
}

export interface AudioFile {
    soundFile: string
    audioDuration: number
}

export type MouthCue = {
    start: number
    end: number
    value: Phoneme
}

export type Phoneme = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'X'

// TODO: update when more avatars added
export enum AvatarNames {
    barb,
    boy,
    __LENGTH
}

// TODO: update when more poses added
enum Pose {
    default,
    relaxed,
    __LENGTH
}

// Eyes Class for updating during runtime
class Eyes {
    areClosed : boolean
    lastBlink: number
    constructor(areClosed: boolean = false, lastBlink: number = -1) {
        this.areClosed = areClosed
        this.lastBlink = lastBlink
    }
    close(lastBlink: number) {
        this.areClosed = true
        this.lastBlink = lastBlink
    }
    open(){
        this.areClosed = false
    }
}

class Mouth {
    expression: string
    phoneme: Phoneme
    constructor(expression: string = '', phoneme: Phoneme = 'A') {
        this.expression = expression
        this.phoneme = phoneme
    }
}

class Body {
    currentPose: string
    lastPoseChange: number
    constructor(currentPose: string = Pose[0], lastPoseChange: number = -1){
        this.currentPose = currentPose
        this.lastPoseChange = lastPoseChange
    }

    updatePose(poseName: string, lastPoseChange: number){
        this.currentPose = poseName
        this.lastPoseChange = lastPoseChange
    }

}

// Class instead of type to allow for self referencing & updating during runtime
export class Avatar {
    // Readonly because having the avatar body change would be real funky
    readonly avatar: string
    eyes: Eyes
    mouth: Mouth
    body: Body
    constructor(avatar: string = AvatarNames[0], eyes: Eyes = new Eyes(), mouth: Mouth = new Mouth(), body: Body = new Body()) {
        this.avatar = avatar
        this.eyes = eyes
        this.mouth = mouth
        this.body = body
    }

    updateMouth(phoneme: Phoneme = this.mouth.phoneme): void {
        this.mouth.phoneme = phoneme
    }

    updateEyes(currentSec: number, frameDur: number): void {
        this.eyes.open()
        if (frameDur < 0.08 && this.eyes.lastBlink != currentSec) {
            let n = Math.random()
            if ((n <= 0.3 && currentSec % 4 == 0) || (n > 0.3 && n <= 0.6 && currentSec % 3 == 0)) {
                this.eyes.close(currentSec)
            }
        }
    }

    // Randomly chooses a new pose that is different from current pose
    chooseNewPose(): string{
        let i = Math.floor((Math.random() * Pose.__LENGTH))
        if (Pose[i] === this.body.currentPose){
            this.chooseNewPose()
        }
        return Pose[i]
    }

    // Updates the body's position based on timings and mouth cues
    updateBody(currentSec: number, frameDur: number): void{
        let poseDur = currentSec - this.body.lastPoseChange
        if (poseDur >= 2 || (poseDur >= 1 && this.mouth.phoneme == 'X') || (poseDur >= 1 && this.mouth.phoneme == 'A')) {
            this.body.currentPose = this.chooseNewPose()
            this.body.lastPoseChange = currentSec
        }
    }

    // Updates the avatar's state. Order matters! Must update mouth before body
    updateState(currentSec: number, frameDur: number, phoneme: Phoneme = this.mouth.phoneme): void{
        this.updateEyes(currentSec, frameDur)
        this.updateMouth(phoneme)
        this.updateBody(currentSec, frameDur)
    }

    // Returns the filepath of the image representation the character state
    generateStateString(duration: string): string {
        return `file ../images/${this.avatar}/${this.mouth.phoneme}_${this.eyes.areClosed ? 'blink' : 'open'}_${
            this.body.currentPose}.png\noutpoint ${duration}\n`
    }
}

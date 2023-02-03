export interface AudioFile {
    soundFile: string
    audioDuraion: number
}

export type MouthCue = {
    start: number
    end: number
    value: string
}

export type MouthCueArray = Array<MouthCue>

// Class instead of type to allow for self referencing & updating during runtime
export class Avatar {
    // Readonly because having the avatar body change would be real funky
    readonly avatar: string
    blink: boolean
    phoneme: string
    arms: string
    constructor(avatar: string = 'barb', blink: boolean = false, phoneme: string = 'A', arms: string = 'relaxed') {
        this.avatar = avatar
        this.blink = blink
        this.phoneme = phoneme
        this.arms = arms
    }
    willBlink(currentSec: number, frameDur: string, lastBlink: number) {
        let eyes: boolean = false
        if (parseInt(frameDur) < 0.1 && lastBlink != currentSec) {
            let n = Math.random()
            if ((n <= 0.4 && currentSec % 4 == 0) || (n > 0.4 && n <= 0.8 && currentSec % 3 == 0)) {
                eyes = true
            }
        }
        return eyes
    }

    // Returns the filepath of the image representation the character state
    generateStateString(duration: string): string {
        return `file ../images/${this.avatar}/${this.phoneme}_${this.blink ? 'blink' : 'open'}_${
            this.arms
        }.png\noutpoint ${duration}\n`
    }

    // Does not allow for update of selected avatar
    //TODO: Update arms parameter when arm phases are implemented
    updateState(blink: boolean = this.blink, phoneme: string = this.phoneme, arms: string = this.arms): void {
        this.blink = blink
        this.phoneme = phoneme
        this.arms = arms
    }
}

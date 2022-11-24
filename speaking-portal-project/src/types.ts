export interface AudioFile {
    soundFile : string 
    audioDuraion: number
}

export type MouthCue =  {
    start : number
    end   : number
    value : string
}

export type MouthCueArray = Array<MouthCue>



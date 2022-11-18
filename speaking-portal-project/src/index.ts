import { rhubarbProcessor} from "./phonemeFactory/rhubarb"
import {mouthCuesToInputFile} from "./phonemeFactory/mouthCueProcessor";


async function main () {

    console.log("Running Rhubarb Processor....")

    const phonemeContents = await rhubarbProcessor('en-Amber.wav','en-text.txt')

    console.log(phonemeContents)

    console.log(mouthCuesToInputFile({mouthCues : phonemeContents}))

}
main()
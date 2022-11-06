import { rhubarbProcessor} from "./phonemeFactory/rhubarb"


async function main () {

    console.log("Running Rhubarb Processor....")

    const phonemeContents = await rhubarbProcessor('en-Amber.wav','en-text.txt')

    console.log(phonemeContents)

}



main()
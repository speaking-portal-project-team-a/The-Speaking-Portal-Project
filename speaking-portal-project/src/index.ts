import { rhubarbProcessor } from './phonemeFactory/rhubarb'
import { mouthCuesToInputFile } from './phonemeFactory/mouthCueProcessor'
import { ffmpegProcessor } from './animationFactory/ffmpeg'

async function main() {
  console.log('Running Rhubarb Processor....')

  const phonemeContents = await rhubarbProcessor('en-Amber.wav', 'en-text.txt')

  console.log(phonemeContents)

  console.log(mouthCuesToInputFile({ mouthCues: phonemeContents }))
  await ffmpegProcessor('../rhubarb/en-Amber.wav', 'input.txt')
}
main()

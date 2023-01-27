import { rhubarbProcessor } from "src/phonemeFactory/rhubarb";
describe('Phoneme Factory Unit Tests', () =>  {

    const TEST_AUDIO_FILE_PATH = './src/test/test_files/en-Amber.wav'
    const TEST_FFMPEG_TEXT_FILE_PATH = './src/test/test_files/test-input.txt'
    const TEST_TEXT_FILE_PATH = './src/test/test_files/en-text.txt'
    const TEST_OUTPUT_DIR_PATH = './src/test/test_files/test_output'
    const RANDOM_FILE_NAME = Math.random() 

    // TODO: Make unit test work
    // test('rhubarb processor', async() => {
    //     expect(()  => rhubarbProcessor('english',TEST_AUDIO_FILE_PATH,TEST_TEXT_FILE_PATH,`${TEST_OUTPUT_DIR_PATH}/output.txt`
    // })
})
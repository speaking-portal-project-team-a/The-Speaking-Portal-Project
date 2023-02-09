import { rhubarbProcessor } from "../phonemeFactory/rhubarb";
import { test, describe, expect } from "@jest/globals"



// selected_language: string,
// audio_file_name: string,
// text_file_name: string,
// output_file_name: string,

const TEST_AUDIO_FILE_PATH = './src/test/test_files/en-Amber.wav'
const TEST_USER_TEXT_FILE_PATH = './src/test/test_files/en-text.txt'
const TEST_FFMPEG_TEXT_FILE_PATH = './src/test/test_files/test-input.txt'
const TEST_OUTPUT_DIR_PATH = './src/test/test_files/test_output'
const RANDOM_FILE_NAME = Math.random() 


describe('Phoneme Factory Unit Tests', () => {
    test('Valid Phoneme Processor', async() => {
        
        expect(await rhubarbProcessor('english',TEST_AUDIO_FILE_PATH, TEST_USER_TEXT_FILE_PATH,`${TEST_OUTPUT_DIR_PATH}/output`)).resolves.toBeFalsy()
    })
})
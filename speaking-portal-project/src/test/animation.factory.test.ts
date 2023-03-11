import {test, describe, expect} from '@jest/globals'
import {ffmpegProcessor, getWavFile} from '../animationFactory/ffmpeg'
import {mouthCuesToInputFile,generateFrameData} from '../animationFactory/animationProcessor'
import fs from 'fs'


// TODO: Can we save these paths somewhere else and import them ?? 
const TEST_AUDIO_FILE_PATH = './src/test/test_files/en-Amber.wav'
const TEST_FFMPEG_TEXT_FILE_PATH = './src/test/test_files/test-input.txt'
const TEST_OUTPUT_DIR_PATH = './src/test/test_files/test_output'
const RANDOM_FILE_NAME = Math.random() 

describe('Animation Factory Tests', () => {
    test('valid ffmpeg processor', async() => {
        const test_args = [
            '-f',
            'concat',
            '-safe',
            '0',
            '-i',
            `${TEST_FFMPEG_TEXT_FILE_PATH}`,
            '-i',
            `${TEST_AUDIO_FILE_PATH}`,
            '-r',
            '24',
            '-s',
            '720x480', // added to avoid "width not divisible by 2" error
            '-pix_fmt',
            'yuv420p',
            `${TEST_OUTPUT_DIR_PATH}/${RANDOM_FILE_NAME}-test.mp4`,
        ]
        expect( await ffmpegProcessor(test_args,'mp4')).toEqual(`./src/test/test_files/test_output/${RANDOM_FILE_NAME}-test.mp4`)
        
        // Delete files created from unit test
        try {
            fs.unlinkSync(`./src/test/test_files/test_output/${RANDOM_FILE_NAME}-test.mp4`)
        } catch (error) {
            throw error
        }
        })

    // TODO: Capture and FFPEG Error Object 
    test('failing ffmpeg processor', async() => 
        await expect(() => ffmpegProcessor([''],'')).rejects.toThrowError())

    // TODO: Figure out a way to test getVideoExport. Maybe make function more generic rather then hard coding paths

    test('valid wav file retreival', async() => { 
        expect(getWavFile(TEST_AUDIO_FILE_PATH,`${TEST_OUTPUT_DIR_PATH}/${RANDOM_FILE_NAME}-test.wav`)).resolves.toBe(`./src/test/test_files/test_output/${RANDOM_FILE_NAME}-test.wav`)
    
        //Delete files created from unit test
        try {
            fs.unlinkSync(`./src/test/test_files/test_output/${RANDOM_FILE_NAME}-test.wav`)
        } catch (error) {
            throw error
        }
    
    })
})
    


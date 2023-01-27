import {test, describe, expect} from '@jest/globals'
import {ffmpegProcessor} from '../animationFactory/ffmpeg'
import fs from 'fs'

const VALID_AUDIO_FILE_PATH = './src/test/test_files/en-Amber.wav'
const VALID_TEXT_FILE_PATH = './src/test/test_files/test-input.txt'
const TEST_OUTPUT_DIR_PATH = './src/test/test_files/test_output'
const MP4_FILE_OUTPUT = Math.random() + '-test.mp4'

describe('Animation Factory Tests', () => {
    
    test('valid ffmpeg processor', async() => {
    const test_args = [
        '-f',
        'concat',
        '-safe',
        '0',
        '-i',
        `${VALID_TEXT_FILE_PATH}`,
        '-i',
        `${VALID_AUDIO_FILE_PATH}`,
        '-r',
        '24',
        '-s',
        '720x480', // added to avoid "width not divisible by 2" error
        '-pix_fmt',
        'yuv420p',
        `${TEST_OUTPUT_DIR_PATH}/${MP4_FILE_OUTPUT}`,
    ]

    expect(ffmpegProcessor(test_args,'mp4')).resolves.toEqual(`./src/test/test_files/test_output/${MP4_FILE_OUTPUT}`)

    try {
        fs.unlinkSync(`./src/test/test_files/test_output/${MP4_FILE_OUTPUT}`)
    } catch (error) {
        throw error
    }

})


    test('failing ffmpeg processor', async() => 
    await expect(() => ffmpegProcessor([''],'')).rejects.toThrowError())
    })


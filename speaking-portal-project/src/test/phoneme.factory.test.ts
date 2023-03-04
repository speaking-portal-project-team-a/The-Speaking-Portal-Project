import { rhubarbProcessor } from "../phonemeFactory/rhubarb";
import { test, describe, expect } from "@jest/globals"
import fs from 'fs'

const TEST_AUDIO_FILE_PATH = './src/test/test_files/en-Amber.wav'
const TEST_USER_TEXT_FILE_PATH = './src/test/test_files/en-text.txt'
const RANDOM_FILE_NAME = `test-${Math.random()}` 


describe('Phoneme Factory Unit Tests', () => {
    test('Valid Phoneme Processor', async() => {
        
        const result = await rhubarbProcessor('english',TEST_AUDIO_FILE_PATH, TEST_USER_TEXT_FILE_PATH, RANDOM_FILE_NAME)
        
        expect(result[0]).toEqual(expect.objectContaining({
            start: expect.any(Number),
            end: expect.any(Number),
            value: expect.any(String)
        }))
        try {
            fs.unlinkSync(__dirname + `/../../tmp/${RANDOM_FILE_NAME}.json`)
        } catch (error) {
            throw error
        }
    })
    
    // TODO: add error handling tests


})
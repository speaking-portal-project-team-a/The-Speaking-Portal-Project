import { test, expect, describe } from '@jest/globals'
import { doesFileExist, isWavFile, isTextFileValid, isWavFileValid, isTextEmpty } from './file_check'

describe('Peer Testing Unit Tests', () => {
    test('Case #1: Missing File Test', async () => {
        await expect(() => doesFileExist('./src/test/test_files/FileDoesNotExist.wav')).rejects.toThrow('FileNotFound')
    })

    test('Case #2: Wrong .wav File Test', async () => {
        await expect(() => isWavFile('./src/test/test_files/BadFormat.mp3')).rejects.toThrow('AudioNotWavFile')
    })

    test('Case #3: Corrupted File Test', async () => {
        await expect(() => isWavFileValid('./src/test/test_files/CorruptedFile.wav')).rejects.toThrow(
            'CorruptedWavFile',
        )
    })

    test('Case #4: Wrong Text File Test', async () => {
        await expect(() => isTextFileValid('./src/test/test_files/BadFormatTxt.json')).rejects.toThrow('TextNotTxtFile')
    })

    test('Case #5: Text File Empty Test', async () => {
        await expect(() => isTextEmpty('./src/test/test_files/empty.txt')).rejects.toThrow('EmptyTextFile')
    })
})

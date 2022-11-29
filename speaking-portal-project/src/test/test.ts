import {test,expect,describe} from '@jest/globals'
import { doesFileExist,isFileReadable,isWavFile,isTextFileValid, isWavFileValid } from "./file_check";
import {} from 'fs'


describe('Peer Testing Unit Tests', () => {

test('File not found func test', async () => {
    await expect(() =>doesFileExist('./test_files/fileDoesNotExist.wav')).rejects.toThrow('FileNotFound')
})

test('Does .txt have correct extension check', async() => {
    await expect(() =>isTextFileValid('./test_files/unreadableTextFile.json')).rejects.toThrow('InvalidTextFile')
 })

test('Check is .wav File has correct extension', async () => {
    await expect(() =>isWavFile('BadFormat.mp3')).rejects.toThrow('AudioNotWavFile')
 })

// test('Check if .wav file is valid ', async () =>{
//   await expect(() =>isWavFileValid('CorruptedFile.wav')).toThrowError('CorruptedWavFile')
//  })


})



// test('File Not Readable', async () => {
   //         await expect(() =>isFileReadable('./test_files/unreadableTextFile.txt')).rejects.toThrow('FileNotReadable')
   //   })


//  test('Check is .wav File has correct extension', async () => {
//     await expect(() =>isWavFile('BadFormat.mp3')).rejects.toThrow('AudioNotWavFile')
//  })


//  test('Check if .wav file is valid ', async () =>{
//   await expect(() =>isWavFileValid('CorruptedFile.wav')).toThrowError('CorruptedWavFile')
//  })

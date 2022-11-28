import {test,expect} from '@jest/globals'
import { doesFileExist,isFileReadable,isWavFile,isTextFileValid } from "./file_check";



test('File Not Found', () => {
    expect(() =>doesFileExist('test.wav')).toThrow('FileNotFound')
 })

 test('File Not Readable', () => {
    expect(() =>isFileReadable('test.wav')).toThrow('FileNotReadable')
 })

 test('Check Text File ', () => {
    expect(() =>isTextFileValid('test.wav')).toThrow('InvalidTextFile')
 })

 test('Check Wav File ', () => {
    expect(() =>isWavFile('test.wav')).toThrow('InvalidWavFile')
 })
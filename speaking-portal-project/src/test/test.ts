import {test,expect} from '@jest/globals'
import { checkFileExistence,checkFileReadAccess,checkWavFile,checkTextFile } from "./file_check";



test('File Not Found', () => { 
    expect(() =>checkFileExistence('test.wav')).toThrow('FileNotFound')
 })

 test('File Not Readable', () => { 
    expect(() =>checkFileReadAccess('test.wav')).toThrow('FileNotReadable')
 })

 test('Check Text File ', () => { 
    expect(() =>checkTextFile('test.wav')).toThrow('InvalidTextFile')
 })

 test('Check Wav File ', () => { 
    expect(() =>checkWavFile('test.wav')).toThrow('InvalidWavFile')
 })
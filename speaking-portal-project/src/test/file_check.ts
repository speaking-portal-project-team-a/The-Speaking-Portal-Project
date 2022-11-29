import { chdir, cwd } from 'node:process'
import fs from 'fs'
import { rejects, throws } from 'node:assert'
import { info } from 'node:console'

var wavFileInfo = require('wav-file-info')

export async function checkFiles(audio_file_name: string, text_file_name: string) {
    /**
     * Checks the file in the Rhubarb directory: existence, read permissions, valid files .wav and .txt
     *
     * @remarks
     * Make sure to call this method in a try-catch statement, as all its helper methods throw errors or return true
     *
     * @param file_name - The name of the file to check
     */
    try {
        chdir('./rhubarb')
    } catch (err) {
        console.log(`Error message: ${err}`)
    }

    // Check Audio File
    await doesFileExist(audio_file_name)
    await isFileReadable(audio_file_name)
    await isWavFile(audio_file_name)
    await isWavFileValid(audio_file_name)

    // Check Text File
    await doesFileExist(text_file_name)
    await isFileReadable(text_file_name)
    await isTextFileValid(text_file_name)

    // Return to original directory
    try {
        chdir('../')
    } catch (err) {
        console.log(`Error message: ${err}`)
    }

    // Promise cannot be void
    return true
}

export async function doesFileExist(file: string) {
    /**
     * Checks for the existence of the specified file in the current directory
     *
     * @remarks
     * This method uses fs.access() instead of fs.exists() per https://nodejs.org/dist/latest-v10.x/docs/api/fs.html
     * The flag F_OK is for checking existence only - no rwx permissions
     *
     * @param file - The name of the file to check
     */
    
    try {
        await fs.promises.access(file,fs.constants.F_OK)
    } catch (err) {
        throw  Error ('FileNotFound')
    }
    console.log(`${file} exists`)
    
    return true
}

export async function isFileReadable(file: string) {
    /**
     * Checks for the read permission of the specified file in the current directory
     *
     * @remarks
     * This method uses fs.access() instead of fs.exists() per https://nodejs.org/dist/latest-v10.x/docs/api/fs.html
     * The flag R_OK checks for permission for reading the file
     *
     * @param file - The name of the file to check
     */

    try {
        fs.promises.access(file, fs.constants.R_OK)
    } catch (err) {
        console.log(err)
        throw Error('FileNotReadable')
    }
 
    console.log(`${file} is readable`)
    return true
}

export async function isWavFile(file: string) {
    /**
     * Checks if the specified audio file is .wav
     *
     * @remarks
     * Ensure checkFileExistence() and checkFileReadAccess() are completed prior to this check
     *
     * @param file - The name of the file to check
     */
    if (file.toLowerCase().includes('.wav')) {
        console.log(`Audio file ${file} has .wav extension`)
    } else {
        throw Error(`AudioNotWavFile`)
    }
    return true
}

export async function isWavFileValid(file: string) {
    /**
     * Checks if the specified .wav file is corrupted
     *
     * @remarks
     * Ensure checkFileExistence(), checkFileReadAccess(), and checkWavFile() are completed prior to this check
     *
     * @param file - The name of the file to check
     */
    
    wavFileInfo.infoByFilename(file, function(err:any, info:any){
        if (err) throw Error("CorruptedWavFile");
        console.log(info);
      });
    
    console.log("Wav file is not corrupted.")
    return true
}

export async function isTextFileValid(file: string) {
    // Check if specified text file is .txt
    if (file.toLowerCase().includes('.txt')) {
        console.log(`Input text file ${file} has .txt extension`)
    } else {
        throw Error(`InvalidTextFile`)
    }

    // Check if text file is readable in utf8 format and check if empty
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw Error(`UnableToReadTextFile`)
        console.log(`Text file ${file} is valid`)
        if (data.length > 0) {
            console.log(`Text file ${file} is not empty`)
            return true
        } else {
            throw Error(`EmptyTextFile`)
        }
    })

    return true
}

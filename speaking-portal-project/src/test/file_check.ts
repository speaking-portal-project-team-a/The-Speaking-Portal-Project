import { chdir } from 'node:process'
import fs from 'fs'

var wavFileInfo = require('wav-file-info')


// TODO: Update File Checks process, add File Error Type


export async function checkFiles(audio_file_name: string, text_file_name: string) {
    /**
     * Checks the file in the Rhubarb directory: existence, read permissions, valid files .wav and .txt
     *
     * @remarks
     * Make sure to call this method in a try-catch statement, as all its helper methods throw errors or return true
     *
     * @param file_name - The name of the file to check
     */
  
    console.log(audio_file_name, text_file_name)
    // Check Audio File
    await doesFileExist(audio_file_name)
    await isWavFile(audio_file_name)
    await isWavFileValid(audio_file_name)

    // Check Text File
    //await doesFileExist(text_file_name) // TODO: this check is causing a bug
    await isTextFileValid(text_file_name)
    await isTextEmpty(text_file_name)

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
        await fs.promises.access(file, fs.constants.F_OK)
    } catch (err) {
        throw new Error(`FileNotFound:${file}`)
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
        throw Error('FileReadAccessDenied')
    }

    console.log(`Reading permission granted for ${file} `)
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

    return new Promise<boolean | Error>((resolve, reject) => {
        wavFileInfo.infoByFilename(file, (err: any, info: any) => {
            if (err) {
                reject(new Error('CorruptedWavFile'))
            } else {
                resolve(true)
            }
        })
    })
}

export async function isTextFileValid(file: string) {
    // Check if specified text file is .txt
    if (file.toLowerCase().includes('.txt')) {
        console.log(`Input text file ${file} has .txt extension`)
    } else {
        throw Error(`TextNotTxtFile`)
    }
    return true
}

export async function isTextEmpty(file: string) {
    // Check if text file is readable in utf8 format and check if empty
    return new Promise<boolean | Error>((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (data.length == 0) {
                reject(new Error('EmptyTextFile'))
            } else {
                console.log('Text file is not empty')
                resolve(true)
            }
        })
    })
}

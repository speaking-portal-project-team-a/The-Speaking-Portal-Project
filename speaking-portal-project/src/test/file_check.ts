import { chdir, cwd } from 'node:process'
import fs from 'fs'

export async function checkFiles(audio_file_name : string, text_file_name : string){
    /**
     * Checks the file in the Rhubarb directory: existence, read permissions, valid files .wav and .txt
     *
     * @remarks
     * Make sure to call this method in a try-catch statement, as all its helper methods throw errors or return true
     *
     * @param file_name - The name of the file to check
     */
    chdir('./rhubarb') // should we do this here?

    // Check Audio File
    checkFileExistence(audio_file_name)
    checkFileReadAccess(audio_file_name)
    checkWavFile(audio_file_name)

    // Check Text File
    checkFileExistence(text_file_name)
    checkFileReadAccess(text_file_name)
    checkTextFile(text_file_name)

    // TODO: chdir() back to original directory? or do we do this after running Rhubarb? should it be here, in index.ts or in rhubarb.ts?

}

function checkFileExistence(file : string) {
    /**
     * Checks for the existence of the specified file in the current directory
     *
     * @remarks
     * This method uses fs.access() instead of fs.exists() per https://nodejs.org/dist/latest-v10.x/docs/api/fs.html
     * The flag F_OK is for checking existence only - no rwx permissions
     *
     * @param file - The name of the file to check
     */
    fs.access(file, fs.constants.F_OK, (err) => { // TODO: should we separate these checks?
        if(err){
            throw Error(`${file} does not exist in ${cwd()}`)
        } else {
            console.log(`${file} exists`)
            return true
        }
    });
}

function checkFileReadAccess(file : string){
    /**
     * Checks for the read permission of the specified file in the current directory
     *
     * @remarks
     * This method uses fs.access() instead of fs.exists() per https://nodejs.org/dist/latest-v10.x/docs/api/fs.html
     * The flag R_OK checks for permission for reading the file
     *
     * @param file - The name of the file to check
     */
    fs.access(file, fs.constants.R_OK, (err) => { // TODO: should we separate these checks?
        if(err)
            throw Error(`${file} is not readable`)
        else
            console.log(`${file} is readable`)
            return true
    });
}

function checkWavFile(file : string){
    // TODO: Should we be checking the name that is given or look for a .wav file in the directory?
    if (file.toLowerCase().includes('.wav')){
        console.log(`Audio file ${file} has .wav extension.`)
    } else {
        throw Error(`Supposed audio file ${file} is not a .wav file.`)
    }

    // TODO: Check if files are valid/not corrupted
    // should we do this manually or with this module? https://www.npmjs.com/package/wav-file-info

    // TODO: check if audio is 0 seconds long

}

function checkTextFile(file : string){
    // TODO: Should we be checking the name that is given or look for a .txt file in the directory?
    if (file.toLowerCase().includes('.txt')){
        console.log(`Input text file ${file} has .txt extension.`)
    } else {
        throw Error(`Supposed text file ${file} is not a .txt file.`)
    }

    // TODO: should we check if it's corrupted? how?

    // TODO: check if text file is empty
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw Error(`Unable to read ${file}`);
        if (data.length > 0){
            console.log(`Text file ${file} is not empty`)
            return true
        } else {
            throw Error(`Text file ${file} is empty. It should not be used in the phoneme factory.`)
        }
    })

}

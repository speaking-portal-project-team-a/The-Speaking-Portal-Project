import { exec } from 'node:child_process'
import { stdout, chdir, cwd } from 'node:process';

const rhubarbProcessor = (output_file_name : string, audio_file_name : string, text_file_name ? : string ) => {
    
    console.log("Starting Rhubarb....")
    
    console.log(`Starting directory: $${cwd()}`)

    try {
        chdir('./rhubarb')
        console.log(`New directory: ${cwd()}`)
    } catch(err) {
        console.log(`Error message: ${err}`)
    }

exec(`"./rhubarb" -o output.json --exportFormat json -r pocketSphinx -d ${text_file_name} --extendedShapes GX ${audio_file_name}`, (error,stdout,stderr) => {
    if (error) {
      throw error;
     } else {
    console.log(stdout);
   }});

}

rhubarbProcessor('output.txt','en-Amber.wav','en-text.txt')





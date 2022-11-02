import { exec } from 'node:child_process'
import { stdout, chdir, cwd } from 'node:process';

console.log("Start Rhubarb....")

console.log(`Starting directory: $${cwd()}`)

cwd()

try {
    chdir('./rhubarb')
    console.log(`New directory: ${cwd()}`)
} catch(err) {
    console.log(`Error message: ${err}`)
}

// For Linux Only (may not be required)

// exec("chmod +x ./rhubarb", (error,stout) => {
//     if (error) {
//         throw error } else {
//             console.log(stdout)
//         } 
// })

cwd()

exec('"./rhubarb" -o output.txt -r pocketSphinx -d text.txt --extendedShapes GX amber.wav', (error,stdout,stderr) => {
      if (error) {
        throw error;
       } else {
      console.log(stdout);
     }});



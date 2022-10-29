import { exec } from 'node:child_process'
import { stdout, chdir, cwd } from 'node:process';

console.log("Start Rhubarb....")

console.log(`Starting directory: $${cwd()}`)

cwd()

try {
    chdir('../rhubarb')
    console.log(`New directory: ${cwd()}`)
} catch(err) {
    console.log(`Error message: ${err}`)
}

exec("chmod +x ./rhubarb.exe", (error,stout) => {
    if (error) {
        throw error } else {
            console.log(stdout)
        } 
})

cwd()

exec('"./rhubarb.exe" -o output.txt amber.wav', (error,stdout,stderr) => {
      if (error) {
        throw error;
       } else {
      console.log(stdout);
     }});

//  exec("./rhubarb -o output.txt en-Amber.wav", (error,stdout,stderr) => {
//      if (error) {
//             throw error;
//        }
//       console.log(stdout);
//      });




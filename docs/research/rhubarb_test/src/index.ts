import { exec } from 'node:child_process'
import { stdout, chdir, cwd } from 'node:process';

console.log("Start Rhubard....")

console.log(`Starting directory: $${cwd()}`)

cwd()

try {
    chdir('../rhubarb')
    console.log(`New directory: ${cwd()}`)
} catch(err) {
    console.log(`Error message: ${err}`)
}

exec("chmod a+x ./rhubarb.exe", (error,stout) => {
    if (error) {
        throw error } else {
            console.log(stdout)
        } 
})

cwd()

exec('"./rhubarb.exe" -o output.txt en-Amber.wav', (error,stdout,stderr) => {
      if (error) {
        throw error;
       } else {
      console.log(stdout);
     }});

// //  exec('"./rhubarb.exe" ./rhubarb -o output.txt en-Amber.wav', (error,stdout,stderr) => {
//      if (error) {
//             throw error;
//        }
//       console.log(stdout);
//      });




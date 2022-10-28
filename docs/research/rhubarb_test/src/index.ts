import { exec } from 'node:child_process'

console.log("Start Rhubard....")


exec('"./rhubarb/rhubarb.exe" ./rhubarb -o output.txt rhubarbtest.wav', (error,stdout,stderr) => {
    if (error) {
            throw error;
       }
       console.log(stdout);
    });




import { execFile} from 'node:child_process'

console.log("Start Rhubard....")
const child = execFile('../rhubarb/rhubarb.exe',(error,stdout,stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});

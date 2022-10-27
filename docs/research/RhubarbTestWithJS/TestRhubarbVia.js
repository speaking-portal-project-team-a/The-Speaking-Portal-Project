const { exec } = require("child_process");

exec("rhubarb -o output1.txt rhubarbtest.wav", (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log("Check File directory for output.txt")
});
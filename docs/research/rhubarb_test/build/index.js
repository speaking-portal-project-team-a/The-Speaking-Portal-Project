"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_child_process_1 = require("node:child_process");
var node_process_1 = require("node:process");
console.log("Start Rhubard....");
console.log("Starting directory: $".concat((0, node_process_1.cwd)()));
(0, node_process_1.cwd)();
try {
    (0, node_process_1.chdir)('../rhubarb');
    console.log("New directory: ".concat((0, node_process_1.cwd)()));
}
catch (err) {
    console.log("Error message: ".concat(err));
}
(0, node_child_process_1.exec)("chmod +x ./rhubarb.exe", function (error, stout) {
    if (error) {
        throw error;
    }
    else {
        console.log(node_process_1.stdout);
    }
});
(0, node_process_1.cwd)();
(0, node_child_process_1.exec)('"./rhubarb" -o output.txt amber.wav', function (error, stdout, stderr) {
    if (error) {
        throw error;
    }
    else {
        console.log(stdout);
    }
});
//  exec("./rhubarb -o output.txt en-Amber.wav", (error,stdout,stderr) => {
//      if (error) {
//             throw error;
//        }
//       console.log(stdout);
//      });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_child_process_1 = require("node:child_process");
console.log("Start Rhubard....");
(0, node_child_process_1.exec)('"./rhubarb/rhubarb.exe" ./rhubarb -o output.txt rhubarbtest.wav', function (error, stdout, stderr) {
    if (error) {
        throw error;
    }
    console.log(stdout);
});

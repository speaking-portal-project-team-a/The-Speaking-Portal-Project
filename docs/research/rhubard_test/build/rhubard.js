"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_child_process_1 = require("node:child_process");
console.log("Start Rhubard....");
var child = (0, node_child_process_1.execFile)('../rhubarb/rhubarb.exe', function (error, stdout, stderr) {
    if (error) {
        throw error;
    }
    console.log(stdout);
});

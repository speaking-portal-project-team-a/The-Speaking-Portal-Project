"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_child_process_1 = require("node:child_process");
var node_process_1 = require("node:process");
var rhubarbProcessor = function (output_file_name, audio_file_name, text_file_name) {
    console.log("Starting Rhubarb....");
    console.log("Starting directory: $".concat((0, node_process_1.cwd)()));
    try {
        (0, node_process_1.chdir)('./rhubarb');
        console.log("New directory: ".concat((0, node_process_1.cwd)()));
    }
    catch (err) {
        console.log("Error message: ".concat(err));
    }
    (0, node_child_process_1.exec)("\"./rhubarb\" -o output.json --exportFormat json -r pocketSphinx -d ".concat(text_file_name, " --extendedShapes GX ").concat(audio_file_name), function (error, stdout, stderr) {
        if (error) {
            throw error;
        }
        else {
            console.log(stdout);
        }
    });
};
rhubarbProcessor('output.txt', 'en-Amber.wav', 'en-text.txt');
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_child_process_1 = require("node:child_process");
var node_process_1 = require("node:process");
console.log("Start Rhubarb....");
console.log("Starting directory: $".concat((0, node_process_1.cwd)()));
(0, node_process_1.cwd)();
try {
    (0, node_process_1.chdir)('./rhubarb');
    console.log("New directory: ".concat((0, node_process_1.cwd)()));
}
catch (err) {
    console.log("Error message: ".concat(err));
}
(0, node_process_1.cwd)();
(0, node_child_process_1.exec)('"./rhubarb" -o output.txt -r pocketSphinx -d text.txt --extendedShapes GX amber.wav', function (error, stdout, stderr) {
    if (error) {
        throw error;
    }
    else {
        console.log(stdout);
    }
});
//# sourceMappingURL=index.js.map
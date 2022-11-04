"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_process_1 = require("node:process");
var node_util_1 = __importDefault(require("node:util"));
var fs_1 = __importDefault(require("fs"));
var exec = node_util_1.default.promisify(require('node:child_process').exec);
function rhubarbProcessor(audio_file_name, text_file_name) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, stout, stderr, data, mouthCues;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Starting Rhubarb....");
                    console.log("Starting directory: $".concat((0, node_process_1.cwd)()));
                    try {
                        (0, node_process_1.chdir)('./rhubarb');
                        console.log("New directory: ".concat((0, node_process_1.cwd)()));
                    }
                    catch (err) {
                        console.log("Error message: ".concat(err));
                    }
                    return [4, exec("\"./rhubarb\" -o output.json --exportFormat json -r pocketSphinx -d ".concat(text_file_name, " --extendedShapes GX ").concat(audio_file_name))];
                case 1:
                    _a = _b.sent(), stout = _a.stout, stderr = _a.stderr;
                    data = fs_1.default.readFileSync('output.json', 'utf8');
                    mouthCues = JSON.parse(data);
                    return [2];
            }
        });
    });
}
rhubarbProcessor('en-Amber.wav', 'en-text.txt');
//# sourceMappingURL=index.js.map
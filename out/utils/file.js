'use scrict';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
var path = require("path");
var case_1 = require("../models/case");
function getFileInfo() {
    var _a = vscode.window.activeTextEditor.document, fileName = _a.fileName, languageId = _a.languageId;
    return {
        path: fileName,
        name: path.basename(fileName, path.extname(fileName)),
        language: languageId,
        case: case_1.CASE.CAMEL
    };
}
exports.getFileInfo = getFileInfo;
//# sourceMappingURL=file.js.map
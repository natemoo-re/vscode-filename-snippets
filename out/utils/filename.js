'use scrict';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
function getActiveTextEditorFilename() {
    return vscode.window.activeTextEditor.document.fileName;
}
exports.getActiveTextEditorFilename = getActiveTextEditorFilename;
//# sourceMappingURL=filename.js.map
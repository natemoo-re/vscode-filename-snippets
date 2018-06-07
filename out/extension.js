'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
var register_1 = require("./snippets/register");
var file_1 = require("./utils/file");
exports.SNIPPET_PREFIX = 'filename';
function activate(context) {
    if (vscode.window.activeTextEditor) {
        var file = file_1.getFileInfo();
        register_1.registerSnippets(context, file);
    }
    vscode.window.onDidChangeActiveTextEditor(function (editor) {
        if (editor) {
            // Dispose of other snippets
            context.subscriptions.forEach(function (snippets) { return snippets.dispose(); });
            var file = file_1.getFileInfo();
            console.log('NEW FILE', file.name);
            register_1.registerSnippets(context, file);
        }
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map
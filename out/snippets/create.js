"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
var extension_1 = require("../extension");
function create(name, body, documentation) {
    console.log('CREATING SNIPPET', name);
    var item = new vscode.CompletionItem(extension_1.SNIPPET_PREFIX + "-" + name, vscode.CompletionItemKind.Snippet);
    item.insertText = new vscode.SnippetString(body);
    item.documentation = new vscode.MarkdownString("Inserts filename as **" + documentation + "**");
    return item;
}
exports.create = create;
//# sourceMappingURL=create.js.map
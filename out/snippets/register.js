"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
var create_1 = require("./create");
var case_1 = require("../utils/case");
function registerSnippets(context, file) {
    var cases = case_1.getCases(file.name);
    var disposable = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: file.language }, {
        provideCompletionItems: function (document, position, token, context) {
            return cases.map(function (item) { return create_1.create(item[0], item[1], item[1]); }).slice();
        }
    });
    context.subscriptions.push(disposable);
}
exports.registerSnippets = registerSnippets;
//# sourceMappingURL=register.js.map
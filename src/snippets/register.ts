import * as vscode from 'vscode';
import { create } from './create';
import { FileInfo } from '../models/file';
import { getCases } from '../utils/case';

export function registerSnippets(context: vscode.ExtensionContext, file: FileInfo) {

    const cases = getCases(file.name);
    const disposable = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: file.language }, {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
            return [...cases.map(item => create(item[0], item[1], item[1]))]
        }
    });

    context.subscriptions.push(disposable);
}


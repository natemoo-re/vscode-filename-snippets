'use strict';

import * as vscode from 'vscode';
import { registerSnippets } from './snippets/register';
import { getFileInfo } from './utils/file';

export const SNIPPET_PREFIX = 'filename';

export function activate(context: vscode.ExtensionContext) {

    if (vscode.window.activeTextEditor) {
        const file = getFileInfo();
        registerSnippets(context, file);
    }

    vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor) {
            // Dispose of other snippets
            context.subscriptions.forEach(snippets => snippets.dispose());
            
            const file = getFileInfo();
            console.log('NEW FILE', file.name);
            registerSnippets(context, file);
        }
    })

}
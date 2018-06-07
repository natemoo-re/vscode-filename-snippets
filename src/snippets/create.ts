import * as vscode from 'vscode';
import { SNIPPET_PREFIX } from '../extension';

export function create(name: string, body: string, documentation: string) {
    let item = new vscode.CompletionItem(`${SNIPPET_PREFIX}-${name}`, vscode.CompletionItemKind.Snippet);
    item.insertText = new vscode.SnippetString(body);
    item.documentation = new vscode.MarkdownString(`Inserts filename as **${documentation}**`);

    return item;
}
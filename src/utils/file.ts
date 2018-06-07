'use scrict';

import * as vscode from 'vscode';
import * as path from 'path';
import { FileInfo } from '../models/file';
import { CASE } from '../models/case';

export function getFileInfo(): FileInfo {
    const { fileName, languageId } = vscode.window.activeTextEditor.document;
    return {
        path: fileName,
        name: path.basename(fileName, path.extname(fileName)),
        language: languageId,
        case: CASE.CAMEL
    };
}
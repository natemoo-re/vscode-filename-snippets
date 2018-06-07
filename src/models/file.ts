import { CASE } from './case';

export interface FileInfo {
    path: string;
    name: string;
    language: string;
    case: CASE;
}
import * as changeCase from 'change-case';


const CASES = new Map<string, (string) => string>();
CASES.set("as-class", (str) => changeCase.pascal(str))
CASES.set("as-constant", (str) => changeCase.constant(str))
CASES.set("as-selector", (str) => changeCase.param(str))

CASES.set("case-camel", (str) => changeCase.camel(str))
CASES.set("case-constant", (str) => changeCase.constant(str))
CASES.set("case-dot", (str) => changeCase.dot(str))
CASES.set("case-kebab", (str) => changeCase.param(str))
CASES.set("case-lower", (str) => str.toLowerCase())
CASES.set("case-pascal", (str) => changeCase.pascal(str))
CASES.set("case-snake", (str) => changeCase.snake(str))
CASES.set("case-title", (str) => changeCase.title(str))
CASES.set("case-upper", (str) => str.toUpperCase())
CASES.set("case-capitalize", (str) => changeCase.ucFirst(str))

export function getCases(input: string): [string, string][] {
    const cases = [];
    CASES.forEach((transformer, key) => {
        cases.push([key, transformer(input)])
    });
    return cases;
}
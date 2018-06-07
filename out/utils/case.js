"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var changeCase = require("change-case");
var CASES = new Map();
CASES.set("as-class", function (str) { return changeCase.pascal(str); });
CASES.set("as-constant", function (str) { return changeCase.constant(str); });
CASES.set("as-selector", function (str) { return changeCase.param(str); });
CASES.set("case-camel", function (str) { return changeCase.camel(str); });
CASES.set("case-constant", function (str) { return changeCase.constant(str); });
CASES.set("case-dot", function (str) { return changeCase.dot(str); });
CASES.set("case-kebab", function (str) { return changeCase.param(str); });
CASES.set("case-lower", function (str) { return str.toLowerCase(); });
CASES.set("case-pascal", function (str) { return changeCase.pascal(str); });
CASES.set("case-snake", function (str) { return changeCase.snake(str); });
CASES.set("case-title", function (str) { return changeCase.title(str); });
CASES.set("case-upper", function (str) { return str.toUpperCase(); });
CASES.set("case-capitalize", function (str) { return changeCase.ucFirst(str); });
function getCases(input) {
    var cases = [];
    CASES.forEach(function (transformer, key) {
        cases.push([key, transformer(input)]);
    });
    return cases;
}
exports.getCases = getCases;
//# sourceMappingURL=case.js.map
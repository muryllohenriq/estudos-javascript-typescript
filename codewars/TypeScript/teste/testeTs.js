"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanToString = void 0;
const booleanToString = (b) => {
    return b == true ? 'true' : 'false';
};
exports.booleanToString = booleanToString;
console.log((0, exports.booleanToString)(false));

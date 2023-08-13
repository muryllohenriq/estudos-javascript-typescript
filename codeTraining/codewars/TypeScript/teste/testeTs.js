"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dutyFree = void 0;
const dutyFree = (normPrice, discount, hol) => {
    return Math.floor(hol / (normPrice * discount / 100));
};
exports.dutyFree = dutyFree;
console.log((0, exports.dutyFree)(120, 30, 1000));

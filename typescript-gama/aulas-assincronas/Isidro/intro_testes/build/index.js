"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("./lib"));
console.log((0, lib_1.default)(2, 3));
console.log((0, lib_1.default)((0, lib_1.default)(2, 3), 4));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var timertest_1 = __importDefault(require("./timertest"));
var jjjj = function () {
    console.log(timertest_1.default());
};
setInterval(jjjj, 500);

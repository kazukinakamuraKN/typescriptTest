"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dddd = function () {
    var aaaa = ["", "", "", ""];
    var bbbb = Math.floor(Math.random() * Math.floor(aaaa.length));
    var cccc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var ccccl = cccc.length;
    aaaa[bbbb] = cccc[Math.floor(Math.random() * ccccl)];
    console.log(aaaa);
    // return aaaa
};
var eeee = setInterval(dddd, 1000);
var ffff = function () {
    clearInterval(eeee);
};
setTimeout(ffff, 3500);
exports.default = dddd;

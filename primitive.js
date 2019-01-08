"use strict";
var nullhoge = null;
var stringhoge = "foo";
var numberhoge = 123;
var booleanhoge = true;
// symbol型の定義ができないーー
// bigint型エラー
// const biginghoge: bigint = BigInt(100)
var undefinedhoge = undefined;
var only_o = 'o';
// 代入できません
// const only_foo: 'foo' = 'fo' + only_o
function hoge() {
    return "hello";
}
document.body.innerHTML = hoge();

"use strict";
// 型定義における条件分岐
// type MyCondition<T, U, X, Y> = T extends U ? X : Y
// TがUに代入可能であれば、XをそうでなければYという型
// 遅延評価：T、Uという型変数への依存がある場合、型の解決はT,Uが決定されるまで評価が遅延される
// Union typesの分配測：Union typesのConditional Typesは、それぞれのConditional typesのUnionに展開される
// すなわち(T1 | T2) extends U ? X : Y = (T1 extends U ? X : Y) | (T2 extends U ? X : Y)
// 例：type Diff<T,U> = T extends U ? never : T
// 例：Diff<"hoge" | "foo" | "piyo" , "foo">
// Intersection typesについても分配則が成り立つ
var a = 123;
var b = "a";
function c(name) {
    return c.monkey + name + c.pig;
}
(function (c) {
    c.monkey = "hello";
    c.pig = "hahaha";
})(c || (c = {}));
console.log(c("goodbye"));

"use strict";
var mytypetest = {
    foo: "a",
    bar: 123,
    baz: true
};
// ???定数なのはmytypetestであり、mytepetest.fooは定数ではない？？？
mytypetest.foo = "aaaaa";
console.log(mytypetest.foo);

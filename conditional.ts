// 型定義における条件分岐
// type MyCondition<T, U, X, Y> = T extends U ? X : Y
// TがUに代入可能であれば、XをそうでなければYという型
// 遅延評価：T、Uという型変数への依存がある場合、型の解決はT,Uが決定されるまで評価が遅延される
// Union typesの分配測：Union typesのConditional Typesは、それぞれのConditional typesのUnionに展開される
// すなわち(T1 | T2) extends U ? X : Y = (T1 extends U ? X : Y) | (T2 extends U ? X : Y)
  // 例：type Diff<T,U> = T extends U ? never : T
  // 例：Diff<"hoge" | "foo" | "piyo" , "foo">
// Intersection typesについても分配則が成り立つ

interface Animal {
  live(): void
}

// class Cat implements Animal{
//   live(){
    
//   }
// }

interface Dog extends Animal {
  woof(): void
}

// Has type 'number'
type Foo = Dog extends Animal ? number : string

// Has type 'string'
type Bar = RegExp extends Dog ? number : string

const a: Foo = 123
const b: Bar = "a"

function c(name: string): string {
  return c.monkey + name + c.pig
}

namespace c {
  export const monkey = "hello"
  export let pig = "hahaha"
} 

console.log(c("goodbye"))
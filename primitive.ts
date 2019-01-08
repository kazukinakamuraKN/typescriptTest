const nullhoge: null = null
const stringhoge: string = "foo"
const numberhoge: number = 123
const booleanhoge: boolean = true
// symbol型の定義ができないーー
// bigint型エラー
// const biginghoge: bigint = BigInt(100)
const undefinedhoge: undefined = undefined

const only_o: 'o' = 'o'
 
// 代入できません
// const only_foo: 'foo' = 'fo' + only_o



function hoge(): string {
  return "hello"
}

document.body.innerHTML = hoge()
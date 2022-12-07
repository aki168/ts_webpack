// 除了檢查型別，也能為 [可選參數 ] 協助除錯
// 回傳值型別 可以先申告, 或是透過 ts 判斷

// type : 可先宣告參數的型別
type Info = {
  name: string,
  age: number
}

function createUser(info: Info) {
  console.log(info.name)
  return info
}

// void 表靜態 無論如何，都不會有回傳的函式
function printYourName(name: string): void {
  console.log('hello' + name)
}

// never 意外發生時，不會有回傳的函式
function getUserData(): never {
  throw new Error('....')
}


// 構建函數 new
type Card = {
  name: string
}


// 當回傳值是陣列時，如何避免 union 情況的發生 ?
// -- 特別是取建構取值時 !!
// 1. as const 斷言方式指定 [複習ch03_5.ts]
// 2. 搭配 as 一個元祖

function getArr() {
  // ....
  // let age = 10
  // let name = 'Mike'
  // let isMarried = false
  // return [10, 'Mike', false] as const
  return [22, 'Rei', true] as [number, string, boolean]
}

const [age, firstName, isMarried] = getArr()


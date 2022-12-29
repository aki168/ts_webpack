// 你是誰就是誰，infer推斷類型
function sliceArr<T extends Array<T>>(a:T){
  console.log(a.length)
}

// infer 用法  (宣告一個變數的感覺, aka 推斷類型的變數)

// array + infer 
// 使用場景: 判斷陣列內的元素後，決定要回傳什麼值 OR 型別 (以infer宣告)
// 利用型別作為判斷依據，可回傳一個值 OR 一個型別 
type T071<T> = T extends Array<infer P> ? P : never;
type R1 = T071<number> //  never
type R2 = T071<['ana']> //  'ana'
type R3 = T071<[string]> //  string
type R4 = T071<['jal', 100]> //  'jal' | 100

// function + infer
// 使用場景: 判斷函式的參數後，決定要回傳什麼值 OR 型別 (以infer宣告)

// type ParamType<T> =>>> 
  // if (有一個任意型別的參數，並且回傳值為字串) return 該參數的型別 OR 類
type ParamType<T> = T extends (para1: infer P) => string ? P : never
type R5 = ParamType<(a:number)=> void> // R5 會是 never
type R6 = ParamType<[20,33]> // R6 會是 never

// interface + infer
interface UserCardB {
  name: string,
  age: number
}
type R7 = ParamType<(a: UserCardB) => string> // R7 會是 UserCard
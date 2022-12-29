// key of
// 使用場景：判斷 interface 內的 key 有哪一些
interface MemberCard {
  name: string,
  age: number,
  cardTitle: string,
  desc: string
}

type t1 = keyof MemberCard
// 'name' | 'age' | 'cardTitle' | 'desc'
const ins:t1 = 'cardTitle'
// ins 會是一個 union 

// 泛型搭配 keyof
// 使用場景：當參數為鍵值關係時，告訴 TS 第二個參數會是 第一個的 key
// (作為編制索引時)

// 一般 JS
// function getVal(obj, key){
//   return obj[key]
// }

// TS 的寫法
function getValue<T,K extends keyof T>(obj:T, key:K) : T[K] {
  return obj[key]
}

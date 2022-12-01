// Array And Turple

// 陣列 -----------------------------------

const arr:(string|number)[] = [1, 2, '3']
// 接受宣告兩種類型的陣列
arr.push('str') // OK
arr.push(1000) // OK

const arr1:number[] = [0, 10, 100]
// arr1.push('str') 報錯

// 陣列類型，宣告的另一寫法(泛型)
const arr2: Array<string> = []
arr2.push('str') // OK

// 元祖 -----------------------------------
// 可指定陣列內每項值規則 OR 二維宣告
// 表示會員資訊:
const tur1:[string, number, boolean] = ['Amy', 18, false] 
// 表示身高體重:
const tur2:[number, number][] =[
  [180, 60],
  [158, 44],
  [165, 55]
] 
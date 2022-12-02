// tpye 與 interface 的差異 : 使用場景差異

// 對 Type 擴充
// ---------- 擴充 ----------
type Animal = {name: string, age: number}
type Cat = Animal & {
  gara: string
}
type Human = Animal & {
  hobby: string
}

let beer:Cat = {
  name:'Beer',
  age:5,
  gara:'tora'
}

let Fixick:Human = {
  name: "Tsai",
  age: 30,
  hobby: 'game'
}

// interface的合併 
// 可重複宣告, 適合合併的場景
// ---------- 合併 ----------

interface Animals {
  name:string,
  age: number
}

interface Dog extends Animals {
  color:string
}

interface Dog { // 合併 追加屬性
  hasOwenr: boolean
}

let mimi:Dog = {
  name:"Mimi",
  age: 12,
  color: 'white',
  hasOwenr: true
}

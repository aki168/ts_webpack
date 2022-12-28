
// extends => 擴充

// extends 一般用法
interface A {
  name:string
}

interface B extends A {
  price: number
}

const donut:B ={
  name:'chocolate donut',
  price: 30
}

// class 則可透過 super 或是 this 獲得信息
class AA {
  name:string
}
class BB extends AA {
  flavor:string
}

// 以 extends 作為條件判斷時
// 情境一 : 是否繼承?
type T73_1 = B extends A ? string : number // B是A的子介面，必定兼容

// 情境二 : 誰能滿足誰? "誰佔的東西多"，可以去滿足另外一方
interface C { name:string }
interface D { name:string, age:number }
type T73_2 = D extends C ? string : number



// coditional type 搭配泛型
type T73_3 = 'Aki' extends 'Aki' ? string : boolean
// T73_3等同 ↓
type TT73_3<T> = T extends 'Aki' ? string : boolean // 類函式參數的感覺
type result = TT73_3<'Aki'>




// union & 泛型用法 [注意陷阱]
type TT73_4 = 'Aki' | 'Aki2' extends 'Aki' ? string : boolean //boolean

type TT73_5<T> = T extends 'Aki' ? string : boolean
type res = TT73_5<'Aki'|'Aki2'>  // string | boolean 
// res 會回傳一個 union 的類型
// T 會看union內有幾個元素，並分次帶入：
// 1. 'Aki' -> T = string
// 2. 'Aki2' -> T = boolean
// 會把所有結果收集起來，相對應變成一個 union 後回傳
type TT73_42<T> = [T] extends ['Aki'] ? string : boolean
type res2 = TT73_42<'Aki'|'Aki2'>  
// ↑若想讓值同 T73_4 的話，可把判斷元素用[]框住



// 一班來說 never 是 「所有類型」 的子類別
type TT73_6 = never  extends 'Aki' ? string : boolean
// 若用泛型表示: never 會被看作為一個「空的 union」
type TT73_7<T> = T extends 'Aki' ? string : boolean
type res3 = TT73_7<never> // 將不會回傳任何東西，若想讓他回傳型別，一樣可把判斷元素用[]框住






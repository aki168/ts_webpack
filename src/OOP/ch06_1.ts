// 物件導向 OOP 是什麼 ?  

// 為系統製作一個藍圖

// 當我們要製作一個會員系統
// 分類: 會員系統
// 屬性: 
// name, phone, age
// 功能:
// 新增資料, 修改資料, 刪除資料

class User {
  constructor(newName:string){
    console.log('實體建立之前....要做的事')
    this.name = newName
  }


  // 屬性
  name: string
  phone: number
  age: number

  // 會員功能
  add(){}
  update(){}
  remove(){}
}

const userA = new User('Shela')
const userB = new User('Weilson')

console.log(userA, userB)
// 2. 基本的 class 寫法，new是什麼?
// 建立一個實體，並參考該類

// 3. constructor 建構函式?
// 拿到設計圖 -> ????? -> 建立物件實體


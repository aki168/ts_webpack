// 介面
// 保持系統功能的一致性

interface UserInterface {
  // 屬性
  name:string
  age:number
  isAdult:boolean

  // 功能
  add:(data:object) => void
  remove:(data:number) => boolean // 傳入會員id- 回傳是否刪除成功
  update:(data:object) => boolean // 傳入修改內容- 回傳是否修改成功
}

// LiveUser類 implements(實作) UserInterface這個介面
// 介面有的， LiveUser也要有
class LiveUser implements UserInterface { 
  // 白話: UserInteface 可以去約束 LiveUser 屬性"型別" & 方法的回傳值"型別" + 參數"型別"
  // 約束但 "不能實作任何功能"，若想約束子層實作某功能則使用 abstract [ch06_3.ts]
  name: string
  age: number
  isAdult: boolean

  address:string
  subscribeLiver:string[]

  add:(data:object)=>{}
  remove: (data: number) => boolean
  update: (data: object) => boolean
}




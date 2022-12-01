// 物件資料宣告

let memberData : {name: string, mail: string, password: string, age?:number, phoneNumber?:number}

memberData = {
  name:"sho",
  mail:"sho@mail.com",
  password:"4fgjot4",
  phoneNumber:0988000222
}

type memberData2 = {name: string, mail: string, password: string, age?:number, phoneNumber?:number}

const satoshi:memberData2= {
  name:"satoshi",
  mail:"sato@mail.com",
  password:"ss0f4",
  age:30
}
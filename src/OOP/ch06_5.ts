// static 不需要實例化 
// 使用場景: 全局變數，靜態可以被大家 [共用的變數]
// 並且不用 new 出實體，也可以直接被取用

// 預設情境: 央行的總餘額
// 在銀行類裡面 規劃取款功能的藍圖? 
class Bank { 
  private static balance:number = 10000 // 不允許被修改的全局變數
  static withdraw(amount:number) {
    if(this.balance<=0 || this.balance - amount < 0) return
    this.balance -= amount
  }
  static getBalance(){
    return this.balance
  }
}

// 製作一個取款功能且針對"個別用戶"取用央行額度
function withdrawUserA(amount:number){
  Bank.withdraw(amount)
  let centerBalance = Bank.getBalance()
  console.log('提完款就印出央行餘額',centerBalance)
} 

const withdrawUserB = (amount:number) => {
  Bank.withdraw(amount)
  let centerBalance = Bank.getBalance()
  console.log('提完款就印出央行餘額',centerBalance)
}

withdrawUserA(2000)
withdrawUserB(10000)
withdrawUserB(99)

// 重要 : 只有 static 的函式，可以呼叫 static 的變數
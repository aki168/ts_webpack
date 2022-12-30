// // commonJS 支援 靜態引入 (ex. if的判斷式中可動態判斷是否要引入)

// 匯出一包物件
const uesrName = 'ming'
const userAge = 22

module.exports = {
  uesrName, 
  userAge
}

// 匯出單一
// module.exports = uesrName

// 一個 module 只能 export 一個值
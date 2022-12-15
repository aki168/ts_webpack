// this 端看執行他的人是誰
// 若想綁定就用 arrow function

class CarInfo {
  name:string = "toyota汽車"

  // [一般版] 
  // hello() 會被存在 prototype，繼承者都可以去訪問到 [最上層] 的那個 hello()
  // 所有的繼承者都指向同一個hello()方法
  // hello(){
  //   console.log('this是', this, this.name)
  // }

  // [箭頭版] 
  // 每開一個實體，hello()方法 就會產生新的記憶體在實體內
  // 記憶體的消耗量較大，等同複製了千千萬萬的hello(?)
  hello = () => {
    console.log('箭頭函式版 this是誰', this, this.name)
  }
}


const myCar = new CarInfo()
const rubyCar = new CarInfo()
rubyCar.name = 'infinite汽車'


// 真正執行時才會知道 this 會是誰 (誰.去點他?)
// 若沒人去執行他，this 則代表 global (即前端的 window)
myCar.hello()
rubyCar.hello()


const helloNext = myCar.hello // 當該方法，指向一個變數時
// helloNext() 無法運行!!
// 原因 : 當下沒有人去調用 helloNext()，調用者則預設為 window
// ** window 底下並沒有 name 這個屬性 **

// 同理 : 若今天改為另一對象的話
const xxxCar = {
  name:"xxx汽車",
  helloNext(){}
}

xxxCar.helloNext = myCar.hello
xxxCar.helloNext() // xxx汽車

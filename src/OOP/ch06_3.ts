// extends -------------------
class Animalss {
  name: string
  run(){
    console.log("run.......")
  }
}

class Dogs extends Animalss {}
class Sheep extends Animalss {}

const snoppy = new Dogs()
snoppy.run() // run.......

// constructor(限制繼承者必須擁有) / super(子想拿到父層) -------------------
class Animalss2 {
  name:string
  constructor(itsName:string){ // 註冊的感覺，建立實體時的'傳入參數'
    this.name = itsName
  }
  run(){
    console.log("慢慢地走")
  }
}

class Dogs2 extends Animalss2 {
  run(){
    console.log( this.name, "running.....") // 小花 running.....
    super.run() // 慢慢地走
    // super去. 可以呼叫到父親的方法
    // 使用情境 覆蓋了run()這個方法後，仍想調用父層原始的 run()
  }
}
class Sheep2 extends Animalss2 {}

const snoppy2 = new Dogs2('小花')
snoppy2.run()


// abstract 抽象類別 :比Interface更激進(?) 子層必須實作 -------------------
// 抽象類別 除了約束子層，還能擁有自己的功能
abstract class Flower {
  color:string
  name:string
  constructor(it:string){
    this.name = it
  }
  grow(){
    console.log('growing....')
  }
  abstract living(name:string):string
}
// 抽象類別不能夠被 new，但可透過其他一般 class 去 extends 他

class Rose extends Flower {
  // 若沒實作的話: 
  // [Error] 非抽象類別 'Rose' 未實作從類別 'Flower' 繼承而來的抽象成員 'living'。
  living(): string {
    return `${this.name} is living.`
  }
}

let taiwanRose = new Rose('美麗的一朵花')
let res = taiwanRose.living()
console.log(res) // 美麗的一朵花 is living.
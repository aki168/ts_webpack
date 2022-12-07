// 使用 function rest參數寫法須注意!

// 多個參數 收集 
function calculate(...nums:number[]){ // 參數為一個陣列 / 長度不等 / 每項都是 number
  console.log(nums)
}

function cal(x: number, y:number, z:number){
  console.log(x+y+z)
}
// 當調用cal時，在TS須注意!!

// JS :
// const paramsArr = [1,2,4] 

// TS :
// 運用 const 的斷言方式，請 TS 將其定義為常數
const paramsArr = [1,2,4] as const
cal(...paramsArr)

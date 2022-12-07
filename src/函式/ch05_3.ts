// overloads fn 重載
// 亦可使用 union 的方式處理 [ch03_6.ts]

// 多個參數需要使用同一個名稱的函式，只依靠一個實作方式 (也可以用上一章的泛型)
// 例如:傳參為 number 就回傳OOO，傳參為boolean 就回傳XXX


type Infoo = {}
// 實作結果: 必須要前面的 fn 一致
function getDatas(data:string):string[]
function getDatas(data:number):number
function getDatas(data:boolean):boolean
function getDatas(data:Infoo):Infoo
function getDatas(data:unknown):unknown {
  if (typeof data === 'string') return []
  if (typeof data === 'number') return 999
  console.log('err') 
}

// getData('AKI')
// getData(1)

// 避免錯誤使用
function hello2(data:string):string[]
function hello2(data:number):number
function hello2(data:string|number):string[]|number {
  return 999
}

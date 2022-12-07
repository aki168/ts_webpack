// nuknown 的用法
let name1:unknown = 'David'
name1 = 888

// 斷言 as 的用法
// 不確定的狀況下 讓TS強制知道他的型別
let name2:unknown = 'Mike'
let name3 = name2 as string

// 以上雖看起來很像多此一舉
// 但 接後端API 實務上可用到 : 斷言應用 => 清晰呈現 response 內容型別
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json() as { // 讓 TS 知道回傳資料的型別, 開發者也可看到提示
    userId:number,
    id:number,
    title:string,
    completed:boolean
  }
  console.log(data)
}

getData()

// unknown 是 比較安全的 any (不做類型檢查)
// 類型的保護機制，TS可協助提醒 非預期狀況
let liveStatus = false

// 假設是一隻要取得 直播間名稱的 API
function getLiveName(){
  let liveName: unknown // 若宣告 any 後面有疑慮的話，TS 不會提醒
  if(liveStatus){
    liveName = 'clubRoom'
  } else {
    liveName = null
  }
  return liveName
}

const result = getLiveName()
// result.split() 
// 🔼TS會提示我們 [物件的類型為 :未知"]
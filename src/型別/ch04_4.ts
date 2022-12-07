// enum 枚舉值
// 舉例 ex: 現在要呈現直播間 已關播 開播中 多人連線 等狀態枚舉

enum LiveStatus {
  'closed' = 0,
  'onAir' = 1,
  'mutiple' = 2
}


let liveRoom = 0
// 避免多人開發的 magic number (不了解該數字表示什麼狀態?)
if (liveRoom === LiveStatus.closed){ 
  // ....
}
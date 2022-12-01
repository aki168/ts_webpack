// union => 多種類型的表達方式
let liveRoomName:(string | number);
liveRoomName = 80667
liveRoomName = 'live88769'

// never =>永遠不可能發生的類型
// let liveRoomName2: string | number ;
// liveRoomName2 = 'ABC123'
// liveRoomName2 = 106888

// if(typeof liveRoomName === 'string'){
//   liveRoomName2.split() // 一定只會是數字
// }

// 強制斷言 => 經歷一段處理會變成其他類型的話，要讓 TS 知道，該資料必定會轉型
let liveRoomName3: string;
liveRoomName3 = 'starRoom'
// .... 假設經過了一段程式處理，轉為 number 的話
let liveRoomName4 = liveRoomName3 as unknown as number
// es6Moudule 靜態引入

export const userName = 'JOJO'
export const userAge = 30
export const address = '台北市信義區XXX'


// export default userName
// 預設輸出也可以是一個物件
export default {
  userName,
  userAge,
  address
}

// 單個的寫法，以及 default 是可以共存的

// TS 都是全域變數，若想要模組化:
// 只要檔案中有 export相關字眼，就會被區隔成各個模組

// 因此有些人會故意在檔案加入 export{} 告訴 TS 他是模組
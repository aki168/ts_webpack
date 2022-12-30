import '@/Generics/ch07_5'

// 模組化兩種類型：

// CommonJS -> Nodejs開發 (ex.安裝包)
const data = require('./commonJS')
// console.log(data)

// ES6 ES Modules -> js較新標準

//單個
import { userName, userAge } from './es6Moudule'
console.log( userName, userAge )

// 全部
// import * as allInfo from './es6Moudule'
// const {userAge, address} = allInfo
// console.log(userAge, address)

// 單個的寫法，以及 default 是可以共存的
import dataAll, {userName as name, userAge as age, address} from './es6Moudule'
console.log(dataAll)
console.log(name, age, address)



//透過打包工具，可以新版與舊版統一輸出
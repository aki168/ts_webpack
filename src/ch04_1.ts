// 自定義類型 (可重複使用)

let num1: number
let passId: number | string
let str1: string | boolean | number // 若想複用該設定，可以透過 TYPE

type LiveName = string | boolean | number

let roomName: LiveName;
let roomName2: LiveName;
let roomName3: LiveName;

// 物件
type Student = { name: string, id: number }

let aki: Student;

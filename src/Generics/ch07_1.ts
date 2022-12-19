// 參數型別也可以透過泛型帶入，於執行時再決定使用的參數是哪個型別

// [使用場景]
// 增加函式的型別彈性
// 邏輯相同，但可接受兩種型別的參數時

function hello<T,U>(paramA:T, paramB:U) : T {
    let dataA:T = paramA
    let dataB:U = paramB
    console.log(paramA, paramB)
    return dataA
}

let sayAKI = hello<string, number>('AKI',88)
let sayBeer = hello<string, boolean>('Beer',true)
console.log(sayAKI)
console.log(sayBeer)
// 泛型 <> (型別的變數?)

// 使用時再決定，要什麼樣類型的參數 / 也可以用下一章的重載 overload
function print<TTT>(data:TTT){
  console.log(data)
}

// 執行
print<string>('Backy')
print<number>(18)
print<boolean>(true)
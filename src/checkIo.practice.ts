// 是否含三個連續文字字串
function threeWords(text: string): boolean {
  let t = text as string
  let arr: string[] = [...t.split(' ')]
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    // console.log(isNaN(arr[i] as unknown as number), arr[i])
    if (isNaN(arr[i] as unknown as number)) {
      count++
      console.log(arr[i], count)
      if (count >= 3) { break }
    } else {
      count = 0
    }
  }
  return count >= 3
}

// 解析句子第一個字母，並排除特殊符號
function firstWord(text: string): string {
  const escapeWords: string[] = ['...', '.', ',']
  escapeWords.forEach(item => {
    text = text.replaceAll(item, ' ')
  })
  const textArr: string[] = [...text.trim().split(' ')]
  return textArr[0];
}

// 解析數字並且相加其位數
function countDigits(text: string): number {
  let arr = [...text.split(' ')]
  let total = 0
  arr.forEach(item => {
    item = item.replace('st', '')
    let flag: boolean = !isNaN(item as unknown as number)
    console.log(flag, item)
    if (flag) {
      total += item.length
    }
  })
  console.log(total)
  return total
}
// console.log(countDigits('who is 1st here'));

// 字串反轉，但仍需留在原始位置上
function backwardStringByWord(text: string): string {
  if (text === '' || text === ' ') return text
  let arr = [...text.split(' ')]
  let newArr: string[] = []
  arr.forEach(str => {
    let newItem =
      str.split('').reverse().join().replaceAll(',', '')
    newArr.push(newItem)
  })
  let newText = newArr.join().replaceAll(',', ' ')
  return newText
}
// console.log(backwardStringByWord("hello   world")) //"olleh   dlrow"

// 回傳最貴的X項商品
interface Stock {
  name: string,
  price: number,
};
function biggerPrice(limit: number, data: Stock[]): Stock[] {
  const sortedData: Stock[] = data.sort((a, b) => b.price - a.price)
  const cuttedArr = sortedData.slice(0, limit)
  return cuttedArr;
}
// console.log(biggerPrice(2, [
//   {"name": "bread", "price": 100},
//   {"name": "wine", "price": 138},
//   {"name": "meat", "price": 15},
//   {"name": "water", "price": 1}
// ]))

function betweenMarkers(text: string, begin: string, end: string): string {
  let result = ''
  let hasBegin = text.includes(begin)
  let hasEnd = text.includes(end)
  
  if (hasBegin && hasEnd) {
    let arr1 = text.split(begin)
    let arr2 = text.split('')
    if ( arr2.indexOf(end) < arr2.indexOf(begin) ){
      return ''
    } 
    arr1.forEach(item => {
      if(item.includes(end)){
        result = item
        result = result.split(end)[0]
      }
    })
  } else if (hasBegin && !hasEnd) {
    let arr1 = text.split(end)
    arr1.forEach(item => {
      if(item.includes(begin)){
        result = item.split(begin)[1]
      }
    })
  } else if (!hasBegin && hasEnd) {
    result = text.split(end)[0]
  } else {
    result = text
  }
  return result
}
// console.log(betweenMarkers("What is >apple<", ">", "<"));

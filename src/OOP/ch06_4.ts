// TS 成員類型 的方法 ----------------------------

// 公開(預設) | 受保護的 | 私有

// pulic 公開: 預設值，可不宣告
// 使用場景 : 可讀取、可修改

// private私有: 不可於外部引用 (僅開發階段提示有幫助)
// => 繼承類別、後代實體皆不可引用
// 使用場景 : 不希望被改，有條件讀取 (若設定get方法則可被讀取)

// pretected 受保護的: 
// => 繼承類別可引用、後代實體不可
// 使用場景 : 不希望被改，但可以被讀取

class UserInfo {
  private name:string = '一號外星人'
  getName(){
    return this.name
  }
}

class VipUser extends UserInfo {
  hello(){
    return `${this.getName()}，您好`
  }
}

const man001 = new VipUser()
console.log(man001.hello())

// ECMA2020 原生的方法 ----------------------------

// 私有變數 private (私有成員)
class UserInfo2 {
  // 宣告 & 呼叫 皆要加上 #
  #name:string = '一號外星人'
  getName(){
    return this.#name
  }
}

class VipUser2 extends UserInfo {
  hello(){
    return `${this.getName()}，您好`
  }
}

const man002 = new VipUser()
console.log(man001.hello())


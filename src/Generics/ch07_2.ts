interface ModelCard<T> {
    title: string,
    desc: T
}

function makeCard<TT> (text:TT) : ModelCard<TT> {
    const data : ModelCard<TT> = {
        title:"AKI",
        desc:text
    }
    return data
}

console.log(makeCard<string>('A good engineer!'))
console.log(makeCard<number>(168))


interface CatProps<U> {
    name: U
}

class CuteCat<UU> implements CatProps<UU> {
    name: UU
    constructor(value:UU){
        this.name = value
    }
}

const Beer = new CuteCat<string>('必嚕')
console.log(Beer)
const Kitty = new CuteCat<number>(91)
console.log(Kitty)
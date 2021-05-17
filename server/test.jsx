function test ({abc}){
    return (abc)
}

let chuj = ["siema","eniu", 1, 2 ,3 ,4 ,5]

let nazwaruwnasie = {"abc":5, bca:1, cba:"elo", cda:"213"}

let {abc, bca, ...qwe} = nazwaruwnasie
console.log(test(nazwaruwnasie))

let [a,...c] = chuj

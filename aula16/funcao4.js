function fatorial(f){
    let res = 1

    for(let c = f; c > 1; c--){
       res *= c
    }
    return res
}

console.log(fatorial(4))

//Fatorial 4! = 4*3*2*1
// 24
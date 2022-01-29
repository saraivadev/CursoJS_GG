function fatorialR(n) {
    if (n == 1) {
        return 1
    } else {
       let r = n * fatorialR(n - 1)

       return r
    }
}

console.log(fatorialR(5))

/*
5! = 5 x 4 x 3 x2 x 1
5! = 5 x 4!

n! = n x (n-1)!

1! = 1


*/
var vnum = []

function addNum() {

    var txtnum = document.getElementById('txtnum')
    var res = document.getElementById('res')

    let num = Number(txtnum.value)
    vnum.push(num)

    let numadd = document.createElement('option')
    numadd.text = `Valor adicionado ${num}`
    numadd.value = `res${num}`
    res.appendChild(numadd)

}


/*

function calcular(){

}

*/


var vnum = []

function addNum() {

    var txtnum = document.getElementById('txtnum')
    var res = document.getElementById('res')

    let num = Number(txtnum.value)

    if (num == "" || num < 1 || num > 100 || vnum.includes(num)) {
        alert("Valor inválido ou já encontrado na lista!")
    } else {

        vnum.push(num)

        let numadd = document.createElement('option')
        numadd.text = `Valor adicionado ${num}\n`
        numadd.value = `res${num}`
        res.appendChild(numadd)

    }

}


/* 
Função que calculará qtd Nº
Maior número cadastrado
Menor número cadastrado
Soma dos valores
Media dos valores

*/

function calcular() {

    var respostaCalc = document.getElementById('resCalc')

    if (vnum.length == 0) {

        alert("Adicione valores antes de finalizar")

    } else {

     let nmax = Math.max(vnum)
       respostaCalc.innerHTML = `Ao todo, temos ${vnum.length} números cadastrados <br>`
       respostaCalc.innerHTML += `O maior valor informado foi ${nmax.value} <br>`
       respostaCalc.innerHTML += `O menor valor informado foi ${Math.min(vnum)} <br>`
       respostaCalc.innerHTML += `Somando todos valores, temos <br>`
       respostaCalc.innerHTML += `A média dos valores digitados é: ${vnum.length} números cadastrados <br>`

x
    }



}



function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var razao = document.getElementById('razao')
    var res = document.getElementById('res')

   

    if (inicio.value == "" || fim.value == ""  || razao.value == "") {
        res.innerHTML = `Impossível contar! Preencha todos os campos com numeros.`
    } else{
       if (razao.value == 0) {
            alert("Razão inválida, considerandando razão 1")
            razao.value = 1
        }
        res.innerHTML = `<p>Contando: </p>`
        for (var c = Number(inicio.value); c <= Number(fim.value); c += Number(razao.value)) {
            res.innerHTML += `${c} <span>&#128073;</span>`
        }
        res.innerHTML += `<span>&#127937;</span>`
    } 

}
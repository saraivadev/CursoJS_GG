function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var razao = document.getElementById('razao')
    var res = document.getElementById('res')



    if (inicio.value == "" || fim.value == "" || razao.value == "") {
        res.innerHTML = `Impossível contar! Preencha todos os campos com numeros.`
    } else {

        i = Number(inicio.value)
        f = Number(fim.value)
        r = Number(razao.value)

        if (r == 0) {
            alert("Razão inválida, considerandando razão 1")
            r = 1
        }
        res.innerHTML = `<p>Contando: </p>`

        if (i < f) {

            for (var c = i; c <= f; c += r) {
                res.innerHTML += `${c} <span>&#128073;</span>`
            }
        } else {

            for (var c = i; c >= f; c -= r) {
                res.innerHTML += `${c} <span>&#128073;</span>`
            }
        }
        res.innerHTML += `<span>&#127937;</span>`

    }

}
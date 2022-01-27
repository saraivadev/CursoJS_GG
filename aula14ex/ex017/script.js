function tabuada(){



var txtn = document.getElementById('textnum')
var res = document.getElementById('seltab')
if(txtn.value.length == 0){
    alert("Digite um número válido")
} else{
n = Number(txtn.value)
    res.innerHTML = ""
    for(var c = 1; c<=10; c++){
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n * c}\n`
    item.value = `res${c}`
    res.appendChild(item)
    }
}
}
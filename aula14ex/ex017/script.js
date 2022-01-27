function tabuada(){



var txtn = document.getElementById('textnum')
var res = document.getElementById('res')
if(txtn==""){
    alert("Digite um número válido")
} else{
n = Number(txtn.value)

    for(var c = 1; c<=10; c++){
    res.innerHTML += `${n} x ${c} = ${n * c}\n`
    }
}
}
function verificar() {

	var data = new Date()
	var ano = data.getFullYear()
	var fano = document.getElementById('txtano')
	var res = document.getElementById('res')

	if (fano.value.length == 0 || fano.value > ano) {
		// com erro  no value     
		window.alert('[ERRO] Verifique os dados e tente novamente!')
	} else { //Calculo idade    
		var fsex = document.getElementsByName('radsex')
		var idade = ano - Number(fano.value)
		var genero = ''
		var img = document.createElement('img')
		img.setAttribute('id', 'foto')

		//Atribui��o sexo

		if (fsex[0].checked) {
			genero = 'Homem'

			if (idade >= 0 && idade < 10) { //CRIANCA
				img.setAttribute('src', 'foto-bebe-m.png')
			} else if (idade < 21) {  //Jovem
				img.setAttribute('src', 'foto-jovem-m.png')
			} else if (idade < 60) {
				//Adulto
				img.setAttribute('src', 'foto-adulto-m.png')
			} else {
				//Idoso
				img.setAttribute('src', 'foto-idoso-m.png')
			}

		} else if (fsex[1].checked) {

			genero = 'Mulher'
			if (idade >= 0 && idade < 10) {
				//CRIANCA
				img.setAttribute('src', 'foto-bebe-f.png')

			} else if (idade < 21) {
				//Jovem
				img.setAttribute('src', 'foto-jovem-f.png')

			} else if (idade < 60) {
				//Adulto
				img.setAttribute('src', 'foto-adulto-f.png')

			} else {
				//Idoso
				img.setAttribute('src', 'foto-idoso-f.png')
			}
		}

		res.style.textAlign = 'center'
		res.innerHTML = `Detectamos ${genero} com ${idade} anos`
		res.appendChild(img)
	}

}


/*



if(idade <=6){


if(genero ='Mulher')
{

img.src = 'foto-bebe-f.png'
res.innerHTML = `Mulher de ${idade}`



}else {

img.src = 'foto-bebe-m.png'
res.innerHTML = `Homem de ${idade}`



} else if(idade > 6 && idade <= 18){

window.alert('Adulto')




}

*/
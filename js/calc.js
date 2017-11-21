function calcular(n1,operador,n2){
	n1 = parseFloat(document.getElementById('numero1').value);
	n2 = parseFloat(document.getElementById('numero2').value);
	n3 = document.getElementById('operador').value;

	if(isNaN(n1) === true ){
		alert("Preencha o Primeiro Campo");	
		return false;
	}else if(isNaN(n2) === true){
		alert("Preencha o Segundo Campo");				
		return false;
	}
	var resultado = 0;
	switch(n3){
		case '1':
		resultado = n1 - n2;
		break;
		case '2':
		resultado = n1 + n2;
		break;
		case '3':
		resultado = n1 * n2;
		break;
		case '4':
		resultado = n1 / n2;
		break;
		default:
		alert("Preencha Corretamente");
		false;
	}

	document.getElementById('resultado').innerHTML = "O Resultado é: " + "<strong><h1>"+resultado+"</h1></strong>";

}

/*

(function life(){
	var vencedor = prompt("Eu sou um numero entre 10 e 2. Estou sempre me achando maior que os demais. Sou um par de números. Quem eu sou?");
	if(vencedor == 8){
		alert("Felicitações, você me achou :)");
	}else if(vencedor == "" || vencedor === null){
		alert("Ei! Me encontre.");
		return life();
	}
	else{
		alert("Você Errou.");
	}
	document.write('Fim de Jogo');
})();

*/

var cor = prompt('Digite uma cor');

switch(cor){
	case 'pera':
	alert("gostosa");
	break;

	case 'maça':
	alert("acida");
	break;

	case 'banana':
	alert("doce");
	break;

	case 'melancia':
	alert("saborosa");
	break;

	default:
	alert("Não curto");

}
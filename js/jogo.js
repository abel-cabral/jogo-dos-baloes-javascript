var timeID = null;

function iniciaJogo(baloes){
	var url = window.location.search.replace("?","");
	var tempo = document.getElementById('cronometro');
	
	switch (url){
		case '1':
		tempo.innerHTML = 60;						
		break;
		case '2':
		tempo.innerHTML = 50;
		break;
		case '3':
		tempo.innerHTML = 30;
		break;
		case '4':
		tempo.innerHTML = 19;
		break;
	}
	//Mostra qual tempo foi escolhido na dificuldade.
	tempoAtual = parseInt(document.getElementById('cronometro').textContent); 

	//Total de Balões
	baloes = 90;
	//Gerado de Balões
	criarBaloes(baloes);
	//Balões Inteiros
	document.getElementById('inteiros').innerHTML=baloes;
	//Chama a função que inicia o cronometro;
	contagemTempo(tempoAtual+1);

}//Fim da função iniciaJogo();

function contagemTempo(tempo){
	tempo = tempo - 1;
	if(tempo < 0){
		gameOver();
		return false;//Só com return de false ele para a contagem negativa
	}
	document.getElementById('cronometro').innerHTML = tempo;
	timeID = setTimeout("contagemTempo("+tempo+")", 1000); 	
	
}


function criarBaloes(baloes){
	for(var i = 1; i <= baloes; i++ ){
		var balao = document.createElement("img");
		balao.src = './imagens/balao_azul_pequeno.png';
		balao.id = 'b'+i;
		document.getElementById('cenario').appendChild(balao);
		balao.onclick = function(){
			estourarBalao(this);//This é referencia a ela mesma ou seja o balao clicado
		}; 
	}
}

//Estourar Balões
function estourarBalao(bum){
	var idBalao = bum.id;
	
	document.getElementById(idBalao).onclick = null;//Removemos o duplo clique em balao
	document.getElementById(idBalao).src ='./imagens/balao_azul_pequeno_estourado.png';
	pontuacao(-1);
}

//Fim do Jogo
function gameOver(){
	remove_eventos_baloes();
	alert('Fim do Game :/');
}

//Pontuação
function pontuacao(pontos){
	btotal = parseInt(document.getElementById('inteiros').textContent) + pontos;//Regra dos Sinais +- da subtrai
	bestourados = parseInt(document.getElementById('estourados').textContent) - pontos;//-- adiciona
	
	document.getElementById('inteiros').innerHTML = btotal;
	document.getElementById('estourados').innerHTML = bestourados;

	vencedor(btotal);
}

//Winner
function vencedor(valor1){
	if(valor1 == 0){
		alert ('Parabêns, você ganhou!');
		pararTempo();
	}
}

//Para o Tempo
function pararTempo(){
	clearTimeout(timeID);
}

function remove_eventos_baloes() {
        var i = 1; //contado para recuperar balões por id
        
        //percorre o lementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
        while(document.getElementById('b'+i)) {
            //retira o evento onclick do elemnto
            document.getElementById('b'+i).onclick = '';
            i++; //faz a iteração da variávei i
        }
}
function game_over(){
    	remove_eventos_baloes();
    	alert('Fim de jogo, você não conseguiu estourar todos os balões a tempo');
    	window.location.assign("https://www.w3schools.com");
}



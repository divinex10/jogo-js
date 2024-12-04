let numeroLimite = 10;
let listaDeNumerosSorteados = [];

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirTextoNaTela(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function verificarChute(){

    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = (`Você acertou o número secreto com ${tentativa} ${palavraTentativa}`);
        exibirTextoNaTela("h1", "Parabéns!");
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
        } else{
            exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
        }
        tentativa++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
    
}

function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número Secreto.");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10.");
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

mensagemInicial();

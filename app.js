let  listaDeSorteio = [];
let numeromaximo = 100;
let secretNumber = escolhaAleatoria();
let quantidadeTentativas = 1;

function escritaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

function exibirTexto() {
    escritaTela("h1", "Jogo do número secreto");
    escritaTela("p", `Escolha um número entre 1 e ${numeromaximo}`);
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == secretNumber) {
        let tentativaEscrita = quantidadeTentativas > 1 ? "tentativas" : "tentativa";
        escritaTela ("h1", `Você acertou o numero secreto ${secretNumber}`);
        escritaTela ("p", ` Com ${quantidadeTentativas} ${tentativaEscrita}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > secretNumber) {
            escritaTela ("p", `O número secreto é menor que ${chute}`);
        } else {
            escritaTela ("p", `O número secreto é maior que ${chute}`);
        }
        quantidadeTentativas++;
        limparCampo()
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function escolhaAleatoria(){
    let numeroEscolhido = parseInt(Math.random() * numeromaximo + 1);
    let tamanhoLista = listaDeSorteio.length;

    if (tamanhoLista == numeromaximo) {
        listaDeSorteio = [];
    }

    if (listaDeSorteio.includes(numeroEscolhido)) {
        return escolhaAleatoria();
    } else {
        listaDeSorteio.push(numeroEscolhido);
        console.log(listaDeSorteio);
        return numeroEscolhido;
    }
}

function reiniciarJG() {
    secretNumber = escolhaAleatoria();
    limparCampo();
    quantidadeTentativas = 1;
    exibirTexto();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}
document.addEventListener("DOMContentLoaded", exibirTexto());
let primeiroNumero = 0;
let segundoNumero = 0;
let opcao = 0;
let continuar = 0;
let res = 0;

function somar() {
    res = primeiroNumero + segundoNumero;
}

function subtrair() {
    res = primeiroNumero - segundoNumero;
}

function multiplicar() {
    res = primeiroNumero * segundoNumero;
}

function dividir() {
    res = primeiroNumero / segundoNumero;
}

do {
    do {
        console.log("Bem vindo a calculadora")
        console.log("O quê você quer fazer?")
        console.log("1 - somar")
        console.log("2 - subtrair")
        console.log("3 - multiplicar")
        console.log("4 - dividir")

        opcao = prompt("Escolha uma opção: ")
    } while (opcao < 1 || opcao > 4);

    primeiroNumero = parseFloat(prompt("Informe o primeiro número: "));
    segundoNumero = parseFloat(prompt("Informe o segundo número: "));

    if (opcao == 1) {
        somar()
    } else if (opcao == 2) {
        subtrair()
    } else if (opcao == 3) {
        multiplicar()
    } else {
        dividir()
    }

    console.log("O resultado é: " + res)


    console.log("Quer fazer mais conta?");
    console.log("1 - sim");
    console.log("2 - nao");
    continuar = parseInt(prompt("Escolha uma opção: "));
} while (continuar === 1)
let imc = 0;

function calcularImc() {
    let altura = parseFloat(prompt("Qual a sua altura? "));
    let peso = parseFloat(prompt("Qual seu peso? "));
    imc = peso / (altura * altura);
}

calcularImc()
console.log("O resultado do imc é: " + imc.toFixed(2));
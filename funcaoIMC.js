console.log("Função IMC")

function imc(){
    let altura = parseFloat(prompt("Informe a sua altura: "));
    let peso = parseFloat(prompt("Informe o peso: "));
    return peso / (altura * altura);
}

console.log("O resultado do imc é de: " + imc().toFixed(2));
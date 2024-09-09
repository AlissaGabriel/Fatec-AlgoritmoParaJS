let nota1 = parseFloat(prompt("Digite a nota 1: "));
let nota2 = parseFloat(prompt("Digite a nota 2: "));

let media = (nota1 + nota2) / 2;

if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

console.log("A média é: " + media);

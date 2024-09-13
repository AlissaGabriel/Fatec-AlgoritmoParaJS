let nota1 = [0, 0];
let nota2 = [0, 0];
let nome = ["", ""];
let mediaSoma = 0;
let media;
let mediaFinal = 0;
let i =0;

for (i = 0; i < 2; i++) {
    nome[i] = prompt("Informe o nome da posição " + i + ": ");
    nota1[i] = parseInt(prompt("Informe a primeira nota do aluno " + nome[i] + ": "));
    nota2[i] = parseInt(prompt("Informe a segunda nota do aluno " + nome[i] + ": "));
    media = (nota1[i] + nota2[i]) / 2
     mediaSoma += media
    console.log("A média do aluno " + nome[i] + " é de: " + media)
}

mediaFinal = mediaSoma / i;
console.log("A média geral da sala é de: " + mediaFinal);


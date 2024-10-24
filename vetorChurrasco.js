let nomeItem = ["", "", ""];
let quantidadeComprada = [0, 0, 0];
let valorUnitario = [0, 0, 0];
let totalUnitario = 0;
let quantidadePessoas = 0;
let i = 0;
let total = 0;

quantidadePessoas = parseInt(prompt("Informe a quantidade de pessoas do churrasco: "));

for (i = 0; i < 3; i++) {
    nomeItem[i] = prompt("Informe o nome do item que você vai levar: ");
    quantidadeComprada[i] = prompt("Informe a quantidade que você vai levar de " + nomeItem[i] + ":");
    valorUnitario[i] = prompt("Informe o valor de cada unidade de " + nomeItem[i] + ":");

    total += (valorUnitario[i] * quantidadeComprada[i]);
    totalUnitario = total / quantidadePessoas;
}

console.log("Extrato");
console.log("Lista de ingredientes do churrasco: ");
for(i=0; i<3;i++){
    console.log(nomeItem[i]);
}

console.log("O valor total do churrasco é de: " + total);
console.log("O valor para cada pessoa é de: " + totalUnitario);
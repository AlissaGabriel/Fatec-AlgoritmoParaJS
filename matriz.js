let matriz = Array(3);


for (let i = 0; i < matriz.length; i++) {
    matriz[i] = Array(3);
}


for (let linha = 0; linha < matriz.length; linha++) {
    for (coluna = 0; coluna < matriz[linha].length; coluna++) {
        matriz[linha][coluna] = parseInt(prompt("Digite um valor para a linha: " + (linha + 1) + " Coluna: " + (coluna + 1) + ":"));
    }
}

for (let linha = 0; linha < matriz.length; linha++) {
    let formatado = "";
    for (coluna = 0; coluna < matriz[linha].length; coluna++) {
        formatado += matriz[linha][coluna].toString().padStart(5, ' ');
    }

    console.log(formatado);
}



// const prompt = require('prompt-sync')();
// let matriz = Array(3);


// for (let i = 0; i < matriz.length; i++) {
//     matriz[i] = Array(3);
// }


// for (let linha = 0; linha < matriz.length; linha++) {
//     for (coluna = 0; coluna < matriz[linha].length; coluna++) {
//         matriz[linha][coluna] = parseInt(prompt("Digite um valor para a linha: " + (linha + 1) + " Coluna: " + (coluna + 1) + ":"));
//     }
// }

// for (let linha = 0; linha < matriz.length; linha++) {
//     for (coluna = 0; coluna < matriz[linha].length; coluna++) {
//         process.stdout.write(matriz[linha][coluna].toString().padStart(5, ' '));
//     }

//     console.log("");
// }
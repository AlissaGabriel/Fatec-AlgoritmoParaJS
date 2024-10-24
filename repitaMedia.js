for (let i = 0; i < 2; i++) {
    let nota1;
    let nota2;

    console.log("Vamos digitar as notas do aluno " + i)

    do {
        nota1 = parseInt(prompt("Digite a primeira nota: "));
    } while (nota1 < 0 || nota1 > 10)

    do {
        nota2 = parseInt(prompt("Digite a segunda nota: "));
    } while (nota2 < 0 || nota2 > 10)

    let media = (nota1 + nota2) / 2

    console.log("A média do aluno é de: " + media);
}
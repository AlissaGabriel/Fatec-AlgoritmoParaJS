class Ingrediente {
    constructor(nome, qnt, valorUnit, valorTotal) {
        this.nome = nome;
        this.qnt = qnt;
        this.valorUnit = valorUnit;
        this.valorTotal = valorUnit * qnt;
    }
}

function Churrasco() {

    const itens = [];
    let custoTotal = 0;
    let opcao = 0;

    let qntPessoa = parseInt(prompt("Informe a quantidade de pessoas do churrasco: "));
    do {
        const nome = prompt("Informe o nome do item: ");
        const qnt = parseInt(prompt("Informe a quantidade do item: "));
        const valorUnit = parseFloat(prompt("Informe o valor unitário do item: "));
        console.log("");

        const ingredientes = new Ingrediente(nome, qnt, valorUnit);
        itens.push(ingredientes)

        console.log("Quer add mais?");
        console.log("1 - Sim")
        console.log("2 - Não")
        opcao = parseInt(prompt("Escolha uma opção: "));
    } while (opcao === 1);

    custoTotal = itens.reduce(function (accumulator, item) {
        return accumulator + item.valorTotal;
    }, 0)

    let totalUnitario = custoTotal / qntPessoa;
    console.log("----------Extrato----------");
    console.log("");
    console.log("Lista de ingredientes do churrasco: ");
    itens.forEach(item => {
        console.log("Nome: " + item.nome);
        console.log("Quantidade: " + item.qnt);
        console.log("Valor unitário: " + item.valorUnit);
        console.log("");
    });
    console.log("");
    console.log("O valor total do churrasco é de: " + custoTotal.toFixed(2));
    console.log("");
    console.log("O valor para cada pessoa é de: " + totalUnitario.toFixed(2));
}

Churrasco();
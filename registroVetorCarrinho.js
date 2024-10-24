class Produto {
    constructor(nome, qnt, valorUnitario) {
        this.nome = nome;
        this.qnt = qnt;
        this.valorUnitario = valorUnitario;
        this.valorTotal = qnt * valorUnitario
    }
}

let itens = [];
let opcao;

do {
    console.log("Carrinho de Compras");
    console.log("Escolha uma opção do menu");
    console.log("1 - Ver carrinho");
    console.log("2 - Add Itens");
    console.log("3 - Atualizar Itens");
    console.log("4 - Remover Itens");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Escolha uma opção: "));

    if (opcao === 1) {
        if (itens.length === 0) {
            console.log("Não há produtos cadastrados");
        } else {
            console.log("Posição" + " " + "Item" + " " + "Quantidade" + " " + "V_U" + " " + "V_T")
            itens.forEach((item, index) => {
                console.log((index + 1) + " " + item.nome + " " + item.qnt + " " + item.valorUnitario + " " + item.valorTotal);
            })
        }
    }
    else if (opcao === 2) {
        const nome = prompt("Informe o nome do produto: ");
        const qnt = parseInt(prompt("Informe a quantidade do produto: "));
        const valorUnitario = parseFloat(prompt("Informe o valor unitário do produto: "));
        itens.push(new Produto(nome, qnt, valorUnitario));
        console.log("Produto adicionado com sucesso!")
    } else if (opcao === 3) {
        const posicao = parseInt(prompt("Informe a posição: ")) - 1;
        if (itens.length === 0) {
            console.log("Não há produtos para alterar!");
        }
        else if (itens[posicao]) {
            const novoNome = prompt("Informe o novo nome: ");
            itens[posicao].nome = novoNome;
            console.log("Produto atualizado com sucesso")
        } else {
            console.log("Produto não encontrado!")
        }
    } else if (opcao === 4) {
        const posicao = parseInt(prompt("Informe a posição: ")) - 1;
        if (itens.length === 0) {
            console.log("Não há produtos para remover!");
        } else if (itens[posicao]) {
            console.log("Vamos remover: " + itens[posicao].nome);
            itens.splice(posicao, 1);
        } else {
            console.log("Produto não encontrado!")
        }
    }
} while (opcao !== 0);
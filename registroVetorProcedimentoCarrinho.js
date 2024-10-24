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

function dinheiro(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

function verCarrinho() {
    if (itens.length === 0) {
        console.log("Não há produtos cadastrados");
    } else {
        console.log("Posição" + " " + "Item" + " " + "Quantidade" + " " + "V_U" + " " + "V_T")
        itens.forEach((item, index) => {
            console.log((index + 1) + " " + item.nome + " " + item.qnt + " " + dinheiro(item.valorUnitario) + " " + dinheiro(item.valorTotal));
        })
    }
}

function adicionarItem() {
    const nome = prompt("Informe o nome do produto: ");
    const qnt = parseInt(prompt("Informe a quantidade do produto: "));
    const valorUnitario = parseFloat(prompt("Informe o valor unitário do produto: "));
    itens.push(new Produto(nome, qnt, valorUnitario));
    console.log("Produto adicionado com sucesso!")
}

function atualizarItem() {
    const posicao = parseInt(prompt("Informe a posição: ")) - 1;
    if (itens.length === 0) {
        console.log("Não há produtos para alterar!");
    }
    else if (itens[posicao]) {
        console.log("Nome atual: " + itens[posicao].nome);
        const novoNome = prompt("Informe o novo nome: ");
        itens[posicao].nome = novoNome;
        console.log("Qunatidade atual: " + itens[posicao].qnt);
        const novaQnt = parseInt(prompt("Informe a nova quantidade: "));
        itens[posicao].qnt = novaQnt;
        console.log("Valor unitário atual: " + itens[posicao].valorUnitario);
        const novoValor = parseFloat(prompt("Informe o novo valor unitário: "));
        itens[posicao].valorUnitario = novoValor;

        itens[posicao].valorTotal = itens[posicao].valorUnitario * itens[posicao].qnt;
        console.log("Produto atualizado com sucesso")
    } else {
        console.log("Produto não encontrado!")
    }
}


function removerItem() {
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


do {
    console.log("Carrinho de Compras");
    console.log("Escolha uma opção do menu");
    console.log("1 - Ver carrinho");
    console.log("2 - Add Itens");
    console.log("3 - Atualizar Itens");
    console.log("4 - Remover Itens");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            verCarrinho();

            break;
        case 2:
            adicionarItem();
            break;
        case 3:
            atualizarItem();
            break;
        case 4:
            removerItem();
    }

} while (opcao !== 0);
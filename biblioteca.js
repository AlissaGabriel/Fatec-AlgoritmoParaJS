const prompt = require('prompt-sync')()

class TLivro {
    constructor(titulo, autor, ano, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.isbn = isbn;
    }
}

let total = 0;
const cadastro = [];

function cadastrarLivro() {
    const titulo = prompt("Informe o titulo do livro: ");
    const autor = prompt("Informe o autor do livro: ");
    const ano = parseInt(prompt("Informe o ano do livro: "));
    const isbn = prompt("Informe o isbn do livro: ");

    const livro = new TLivro(titulo, autor, ano, isbn);
    cadastro.push(livro);
    total++;
    console.log("Livro cadastrado com sucesso!");
}

function exibirCatalogo() {
    if (cadastro < 0 || cadastro >= total) {
        console.log("Não há livros cadastrados!")
    } else {
        console.log("Livros da Biblioteca: ");
        cadastro.forEach((book, indice) => {
            console.log("Posição: ", indice + 1);
            console.log("Titulo: " + book.titulo);
            console.log("Autor: " + book.autor);
            console.log("Ano: " + book.ano);
            console.log("ISBN: " + book.isbn);
        })
    };

}

function BuscarLivroPorTitulo(livroNome) {
    return cadastro.findIndex(busca => livroNome === busca.titulo);
}

function BuscarLivro() {
    let tituloLivro = prompt("Informe o titulo do livro que deseja: ");
    const indice = BuscarLivroPorTitulo(tituloLivro);

    if (indice === -1) {
        console.log("Livro não encontrado!");
    } else {
        const livroEncontrado = cadastro[indice];
        console.log("Livro Encontrado!");
        console.log("Titulo: " + livroEncontrado.titulo);
        console.log("Autor: " + livroEncontrado.autor);
        console.log("Ano: " + livroEncontrado.ano);
        console.log("Isbn: " + livroEncontrado.isbn);
    }
}

function editarLivro() {
    const posicao = parseInt(prompt("Informe a posição do livro que você quer alterar: ")) - 1;
    if (posicao < 0 || posicao >= total) {
        console.log("Não há livro nessa posição");
        return;
    } else {
        console.log("Titulo Atual: " + cadastro[posicao].titulo);
        cadastro[posicao].titulo = prompt("Informe o novo titulo: ");
        console.log("Autor atual: " + cadastro[posicao].autor);
        cadastro[posicao].autor = prompt("Informe o novo autor: ");
        console.log("Ano atual: " + cadastro[posicao].ano)
        cadastro[posicao].ano = parseInt(prompt("Informe o novo ano: "));
        console.log("Isbn Atual: " + cadastro[posicao].isbn)
        cadastro[posicao].isbn = prompt("Informe o novo isbn: ");
        console.log("Livro atualizado!")
    }
}


function removerLivro() {
    const posicao = parseInt(prompt("Informe a posição: ")) - 1;
    if (posicao < 0 || posicao >= total) {
        console.log("Não há livro nessa posição");
    } else {
        console.log("Livro removido: " + cadastro[posicao].titulo);
        cadastro.splice(posicao, 1);
        total--;
    }
}

let opcao = 0;

do {
    console.log("Biblioteca");
    console.log("1 - Cadastrar Livros");
    console.log("2 - Exibir Catálogo");
    console.log("3 - Buscar Livro por Título");
    console.log("4 - Editar Livros");
    console.log("5 - Remover Livros");
    console.log("6 - Sair");
    opcao = parseInt(prompt("Escolha uma opção: "));

    if (opcao === 1) {
        cadastrarLivro()
    } else if (opcao === 2) {
        exibirCatalogo()
    } else if (opcao == 3) {
        BuscarLivro()
    } else if (opcao == 4) {
        editarLivro()
    } else if (opcao === 5) {
        removerLivro();
    }
} while (opcao !== 6);

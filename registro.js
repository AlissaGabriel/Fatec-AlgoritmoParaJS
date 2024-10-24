
class Pessoa {
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
}

const aluno = new Pessoa("Jorge", 21, 30);

console.log("Nome: " + aluno.nome);
console.log("Idade: " + aluno.idade);
console.log("Peso: " + aluno.peso);



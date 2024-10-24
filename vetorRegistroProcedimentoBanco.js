class Transacao {
    constructor(data, valor) {
        this.data = data;
        this.valor = valor;
    }
}

const movimentacao = [];

function Login() {
    for (let i = 1; i < 4; i++) {
        console.log("Você tem " + i + " de 3 tentativas");
        let usuario = prompt("Informe o usuário: ");
        let senha = prompt("Informe a senha: ");

        if (usuario === "joao" && senha === "123") {
            console.log("Login realizado com sucesso!");
            return true;
        } else {
            if (i === 3) {
                console.log("Conta bloqueada!");
                return false;
            }
        }
    }
}

function Sacar() {
    console.log("Saque");
    let valorConta = Saldo();
    console.log("Seu saldo na conta é de: R$ " + valorConta);

    let valorSaque = parseFloat(prompt("Informe o valor do saque: "));

    if (valorSaque > valorConta || valorSaque <= 0) {
        console.log("Valor indisponível");
    } else {
        let dataSaque = prompt("Informe a data do saque: ");
        movimentacao.push(new Transacao(dataSaque, -valorSaque));
        console.log("Saque realizado com sucesso")
    }
}

function Depositar() {
    console.log("Depósito");

    let valor = 0;
    let data = "";

    do {
        valor = parseFloat(prompt("Informe o valor do Depósito: "));
        data = prompt("Informe a data do Depósito: ");
        if (valor <= 0) {
            console.log("Quantidade Inválida");
        }
    } while (valor <= 0);

    movimentacao.push(new Transacao(data, valor));
    console.log("Depósito realizado com sucesso!");
}

function verExtrato() {
    console.log("Extrato: ");
    movimentacao.forEach((item, index) => {
        console.log("Transação: " + (index + 1))
        console.log("Valor: R$" + item.valor);
        console.log("Data: " + item.data);
        console.log("----------------")
    });

    let valorTotal = Saldo();
    console.log("Seu saldo é de: R$ " + valorTotal);
}

function verSaldo() {
    let valorSaldo = Saldo();

    console.log("Seu saldo é de: R$" + valorSaldo);
}

function Saldo() {
    let valor = 0;
    for (let transacao of movimentacao) {
        valor += transacao.valor;
    }
    return valor;
}

let opcao = 0;

if (Login()) {
    do {
        console.log("Caixa Eletrônico: ");
        console.log("1 - Depositar");
        console.log("2 - Sacar");
        console.log("3 - Ver o extrato");
        console.log("4 - Ver saldo");
        console.log("5 - Finalizar");

        opcao = parseInt(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                Depositar();
                break;
            case 2:
                Sacar();
                break;
            case 3:
                verExtrato();
                break;
            case 4:
                verSaldo();
                break;
        }
    } while (opcao !== 5);
}
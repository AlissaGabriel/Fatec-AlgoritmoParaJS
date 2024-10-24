class Candidato {
    constructor(nome, partido, numero) {
        this.nome = nome;
        this.partido = partido;
        this.numero = numero;
        this.votosRecebidos = 0;
    }
}

function isValido(voto) {
    let achou = false;
    for (let i = 0; i < votacao.length; i++) {
        if (votacao[i].numero === voto) {
            votacao[i].votosRecebidos++;
            achou = true;
            break;
        }
    }
    return achou;
};

function votar() {
    let votarBranco = prompt("Você deseja votar em branco? S/N ");
    if (votarBranco === "S" || votarBranco === "s") {
        votoBranco++;
        console.log("Voto branco registrado!")
    } else {
        console.log("Em quem você quer votar? ");
        let voto = parseInt(prompt("Digite o número do seu candidato: "));

        if (isValido(voto)) {
            console.log("Voto Registrado!");
        } else {
            console.log("Voto nulo registrado!");
            votoNulo++;
        }
    }
}

function relatorio() {

    let algumVotado = false;

    votacao.forEach(relat => {
        if (relat.votosRecebidos > 0) {
            console.log(`${relat.nome} (${relat.numero}): ${relat.votosRecebidos} votos`);
            algumVotado = true;
        }
    });

    console.log("O total de votos brancos foram de: " + votoBranco);
    console.log("O total de votos nulo foram de: " + votoNulo);

    if (!algumVotado) {
        console.log("ngm foi votado!");
    }
}



let votoBranco = 0;
let votoNulo = 0;
let opcao = 0;

const votacao = [
    new Candidato("José", "ABC", 1),
    new Candidato("João", "DFG", 2)
]

do {
    console.log("Urna Eletronica");
    console.log("1 - Votar");
    console.log("2 - Relatório");
    console.log("3 - Sair");

    opcao = parseInt(prompt("Escolha uma opção: "));

    if (opcao === 1) {
        votar();
    } else if (opcao === 2) {
        relatorio();
    }
} while (opcao !== 3)

function repitaMenu() {
    let opcao;

    do {
        console.log("1 - Dizer olá!");
        console.log("2 - Dizer oi!");
        console.log("0 - Sair do programa");

        opcao = parseInt(prompt("Escolha uma opção: "));

        if (opcao === 1) {
            console.log("Olá!");
        } else if (opcao === 2) {
            console.log("Oi!");
        }

    } while (opcao !== 0);
}

repitaMenu();
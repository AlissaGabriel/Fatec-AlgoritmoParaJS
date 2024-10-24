function repitaMenu() {
    let opcao;
    let opcaoLanche;
    let opcaoBebida;
    let formaPagamento;
    let opcaoEntrega;
    let valorPedido = 0;
    let taxa = 0;

    do {
        console.log("1 - Exibir Cardápio");
        console.log("2 - Novo Pedido");
        console.log("3 - Acompanhar Pedido");
        console.log("0 - Encerrar o Pedido");

        opcao = parseInt(prompt("Escolha uma opção: "));

        if (opcao === 1 || opcao === 2) {
            do {
                console.log("Escolha seu Lanche: ");
                console.log("1 - X-Tudo R$ 35");
                console.log("2 - X-Salada R$ 25");
                console.log("3 - X-Burguer R$ 15");
                console.log("4 - Nenhum");
                opcaoLanche = parseInt(prompt("Escolha uma opção: "));
            } while (opcaoBebida < 1 && opcaoLanche > 3);

            do {
                console.log("Escolha sua Bebida: ");
                console.log("1 - Coca R$ 6");
                console.log("2 - Quinze R$ 4");
                console.log("3 - Dolly R$ 2.50");
                console.log("4 - Nenhum");
                opcaoBebida = parseInt(prompt("Escolha uma opção: "));
            } while (opcaoBebida < 1 && opcaoBebida > 3);

            do {
                console.log("Escolha a forma de pagamento: ");
                console.log("1 - Pix");
                console.log("2 - Cartão");
                console.log("3 - Dinheiro");
                formaPagamento = parseInt(prompt("Escolha uma opção: "));
            } while (formaPagamento < 1 && formaPagamento > 3);

            do {
                console.log("Escolha onde comer: ");
                console.log("1 - Comer no local");
                console.log("2 - Entregar");
                opcaoEntrega = parseInt(prompt("Escolha uma opção: "));
            } while (opcaoEntrega < 1 && opcaoEntrega > 2);
        }

        else if (opcao === 3) {
            console.log("Extrato do seu pedido: ");

            if (opcaoLanche === 1) {
                valorPedido += 35;
            } else if (opcaoLanche === 2) {
                valorPedido += 25;
            } else if (opcaoLanche === 3) {
                valorPedido += 15;
            }
            if (opcaoBebida === 1) {
                valorPedido += 6;
            } else if (opcaoBebida === 2) {
                valorPedido += 4;
            } else if (opcaoBebida === 3) {
                valorPedido += 2.50;
            }

            console.log("Seu pedido deu R$: " + valorPedido);

            if (formaPagamento === 1) {
                console.log("Sua forma de pagamento é Pix");
            } else if (formaPagamento === 2) {
                console.log("Sua forma de pagamento é Cartão")
            } else if (formaPagamento === 3) {
                console.log("Sua forma de pagamento é Dinheiro")
            }

            if (opcaoEntrega === 1) {
                console.log("Para comer no local!");
            } else if (opcaoEntrega === 2) {
                taxa = valorPedido * 0.1
                console.log("O valor da taxa de entrega é de: " + taxa.toFixed(2));
            }
            console.log("Total do pedido: " + (valorPedido + taxa));

        }

    } while (opcao !== 0);
    console.log("Encerrou o pedido");
}

repitaMenu();

console.log("Desconto Pagamento: ");

let pagamento = parseFloat(prompt("Qual o valor do pagamento: "));

console.log("Cartão - 1");
console.log("Pix - 2");
console.log("Dinheiro - 3");

let forma = parseInt(prompt("Qual a forma de pagamento: "));
let novoPagamento = 0;
let desconto = 0;

if(forma == 1){
    console.log("o valor do pagamento em cartao é de: " + pagamento);
}
else if(forma == 2 ){
     novoPagamento = pagamento * 0.06;
     desconto = pagamento - novoPagamento;
     console.log("o valor do pagamento em pix é de: " + desconto);
}
else if(forma == 3 ){
    novoPagamento = pagamento * 0.10;
    desconto = pagamento - novoPagamento;
    console.log("o valor do pagamento em Dinheiro é de: " + desconto);
}

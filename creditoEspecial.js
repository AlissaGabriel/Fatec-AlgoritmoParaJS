alert("Crédito Especial: ")

let saldoMedio = parseFloat(prompt("Informe o seu saldo médio do último ano: "));

let valorCredito = 0;

if(saldoMedio <= 200){
    valorCredito = 0;
}
else if(saldoMedio > 200 && saldoMedio <= 400){
    valorCredito = saldoMedio * 0.2;
}
else if(saldoMedio > 400 && saldoMedio <= 600){
    valorCredito = saldoMedio * 0.3;
}
else if(saldoMedio > 600){
    valorCredito = saldoMedio * 0.4;
}

let idade = parseInt(prompt("Informe a idade: "));

if(idade >= 18 && idade <=24){
    seguro = valorCredito * 0.02;
}
else if(idade >= 25 && idade <= 35){
    seguro = valorCredito * 0.06;
}
else if(idade >= 36 && idade <= 45){
    seguro = valorCredito * 0.08;
}
else if(idade >= 46 && idade <= 55){
    seguro = valorCredito * 0.10;
}
else if(idade > 55){
    seguro = valorCredito * 0.15;
}

alert("O valor do seu crédito é de: " + valorCredito.toFixed(2));
alert("O valor do seu seguro é de: " + seguro.toFixed(2));
alert("Total: " + (valorCredito + seguro));
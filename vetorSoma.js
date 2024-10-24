salario = [0, 0, 0, 0, 0,];
let i;
let soma = 0;

salario[1] = 7000;
salario[2] = 15000;
salario[3] = 8000;
salario[4] = 30000;
salario[5] = 15000;

for(let i=0; i<5; i++){
    soma = soma + salario[i]
}

console.log("A soma dos salários é: " + soma.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));


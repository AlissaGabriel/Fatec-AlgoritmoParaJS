for(var i = 0; i<5; i++){

console.log("Vamos Digitar as notas do aluno " + i)
let nota1 = 0;
let nota2 = 0;

do{
 nota1 = parseFloat(prompt("Digite a primeira nota: "));
} while(nota1 <= 0 || nota1 >= 11);

nota2 = parseFloat(prompt("Digite a segunda nota: "));

while(nota2<=0 || nota2 >= 11){
    nota2 = parseFloat(prompt("Digite a segunda nota: "));
};

   let media = (nota1 + nota2)/2;
   console.log("A média do aluno é: " + media);
}
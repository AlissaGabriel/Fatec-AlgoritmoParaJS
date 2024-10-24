const prompt = require("prompt-sync")()

let nota = [0, 0, 0, 0, 0];
let i = 0;

nota[1] = parseInt(prompt("Informe a nota do primeiro aluno: "));

console.log("Você digitou a nota: " + nota[1]);

for (i = 0; i < 5; i++) {
    nota[i] = parseInt(prompt("Informe a nota da posição " + i + ": "))
}

console.log("As notas digitadas foram: ");

//exemplo com para
for (i = 0; i < 5; i++) {
    console.log("Nota da posição " + i + ":" + nota[i]);
}

console.log("___________________________")

//exemplo digitando manualmente

console.log("Nota da posição 0: " + nota[0])
console.log("Nota da posição 1: " + nota[1])
console.log("Nota da posição 2: " + nota[2])
console.log("Nota da posição 3: " + nota[3])
console.log("Nota da posição 4: " + nota[4])


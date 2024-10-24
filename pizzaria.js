console.log("Pizzaria");

let pizza = parseInt(prompt("Você vai querer quantas pizzas? "));
let totalPizza = pizza * 45.90;
let calzone = parseInt(prompt("Você vai querer quantos calzones? "));
let totalCalzone = calzone * 33.90;
let refrigerante = parseInt(prompt("Você vai querer quantos refrigerantes lata? "));
let totalRefri = refrigerante * 4;
let suco = parseInt(prompt("Você vai querer quantas jarras de sucos? "));
let totalSuco = suco * 6;
let totalParcial = totalPizza + totalCalzone + totalRefri + totalSuco;
let garcom = totalParcial * 0.1;
let total = totalParcial + garcom;
console.log("Extrato do pedido: ")
console.log("O total da mesa foi de: " + total.toFixed(2));
console.log("O valor para o garçom é de: " + garcom.toFixed(2));
console.log("Você pediu: " + pizza + " pizza(s)");
console.log("O valor da pizza é de: " + totalPizza.toFixed(2));
console.log("Você pediu: " + calzone + " calzone(s)");
console.log("O valor de calzone é de: " + totalCalzone.toFixed(2));
console.log("Você pediu: " + refrigerante + " refrigerante(s)");
console.log("O valor de refrigerante é de: " + totalRefri.toFixed(2));
console.log("Você pediu: " + suco + " suco(s)");
console.log("O valor do suco é de: " + totalSuco.toFixed(2));
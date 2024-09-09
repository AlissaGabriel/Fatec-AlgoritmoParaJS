console.log("Bem vindo ao Açougue: ");

let mussarela = parseFloat(prompt("Quantos kg de mussarela foram vendidos? "));
let total_mussarela = mussarela * 55;
let comissao_mussarela = total_mussarela * 0.07;

let mortadela = parseFloat(prompt("Quantos kg de mortadela foram vendidos? "));
let total_mortadela = mortadela * 33;
let comissao_mortadela = total_mortadela * 0.04;

let peito_de_peru = parseFloat(prompt("Quantos kg de Peito de Peru foram vendidos? "));
let total_peito_de_peru = peito_de_peru * 23;
let comissao_peito_de_peru = total_peito_de_peru * 0.08;

let presunto = parseFloat(prompt("Quantos kg de presunto foram vendidos? "));
let total_presunto = presunto * 85;
let comissao_presunto = total_presunto * 0.02;

let total = total_mussarela + total_presunto + total_mortadela + total_peito_de_peru
{ console.log("O total do valor de todos os frios somados foi de: " + total.toFixed(2)); }

let comissao = comissao_mussarela + comissao_mortadela + comissao_peito_de_peru + comissao_presunto
{ console.log("O total do valor de todas as comissões somadas foi de: " + comissao.toFixed(2)); }

{ console.log("Comissão Mussarela: " + comissao_mussarela.toFixed(2)); }

{ console.log("Comissão Mortadela: " + comissao_mortadela.toFixed(2)); }

{ console.log("Comissão Peito de Peru: " + comissao_peito_de_peru.toFixed(2)); }

{ console.log("Comissão Presunto: " + comissao_presunto.toFixed(2)); }


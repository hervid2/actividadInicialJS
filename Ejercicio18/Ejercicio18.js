// Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b 

let a = parseFloat(prompt("valor de a"));
let b = parseFloat(prompt("valor de b"));
let c = parseFloat(prompt("valor de c"));

function calculo(a, b, c){
    let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
}

calculo(a, b, c);
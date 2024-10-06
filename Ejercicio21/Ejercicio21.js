// Escribir un programa que calcule el volumen de un elipsoide. 

let a = parseFloat(prompt("A"));
let b = parseFloat(prompt("B"));
let c = parseFloat(prompt("C"));

function calculo(a, b, c){
    let volumen = (4 / 3 * Math.PI * a * b * c);
    alert(`El volumen del elipsoide es ${volumen}`);
}

calculo(a, b, c);
// Escribir un programa que lea 4 números y calcule la media.

function calcularMedia(numero1, numero2, numero3, numero4) {
    return (numero1 + numero2 + numero3 + numero4)/4;
}

const numero1 = parseFloat(prompt("Por favor ingrese el primer número: "));
const numero2 = parseFloat(prompt("Por favor ingrese el segundo número: "));
const numero3 = parseFloat(prompt("Por favor ingrese el tercer número: "));
const numero4 = parseFloat(prompt("Por favor ingrese el cuarto número: "));
const moda = calcularMedia(numero1, numero2, numero3, numero4);

alert(`La media de ${numero1}, ${numero2}, ${numero3} y ${numero4} es: ${moda}`);

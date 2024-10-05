// Escribir un programa que sume, resta, multiplique y divida dos números.

function funcionesAritmeticas(){

    let digito1 = parseFloat(prompt("Calculadora de funciones aritméticas básicas. Por favor digite el primer número: "));
let digito2 = parseFloat(prompt("Por favor ingrese el segundo número:"));

if(isNaN(digito1) || isNaN(digito2)){
    alert("Caracter no válido. Por favor ingrese solo caracteres numéricos!");
    return;
}
const suma = digito1 + digito2;
const resta = digito1 - digito2;
const multiplicacion = digito1 * digito2;
const division = digito1 / digito2;

alert(`Los resultados son:\n Suma ${suma}; Resta: ${resta}; Multiplicación: ${multiplicacion}; División: ${division}; `);

}
funcionesAritmeticas();
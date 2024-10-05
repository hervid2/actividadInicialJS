// Escribir un programa que calcule el área de un rectángulo:


function calcularAreaRectangulo(base, altura) {
    return base * altura;
}
let base = parseFloat(prompt("Por favor ingrese la base del rectángulo:"));
let altura = parseFloat(prompt("Por favor ingrese la altura del rectángulo:"));
let area = calcularAreaRectangulo(base, altura);

alert("El área del rectángulo es: " + area + " cm²");


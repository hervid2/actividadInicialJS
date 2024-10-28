// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean 
// positivos: área triangulo= lado * lado 

// Cálculo del área de un rectángulo
let base = parseFloat(prompt("Ingrese la longitud de la base del rectángulo:"));
let altura = parseFloat(prompt("Ingrese la longitud de la altura del rectángulo:"));

if (base > 0 && altura > 0) {
    let areaRectangulo = base * altura;
    console.log(`El área del rectángulo es: ${areaRectangulo}`);
} else {
    console.log("Los valores de la base y la altura deben ser positivos.");
}

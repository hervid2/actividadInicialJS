//  Escriba un algoritmo que permita calcular el área, debe preguntar que figura
//   geométrica desea calcular "Triángulo y Círculo: (Escriba T o C): a. Triangulo 
//   = base * altura / 2 b. Circulo = PI * radio* radio 


let opcion = prompt("¿Qué figura geométrica deseas calcular el área?\nEscriba 'T' para Triángulo o 'C' para Círculo:").toUpperCase();

if (opcion === 'T') {
    // Cálculo del área de un triángulo
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        console.log("Los valores ingresados deben ser números positivos.");
    } else {
        let areaTriangulo = (base * altura) / 2;
        console.log(`El área del triángulo es: ${areaTriangulo}`);
    }
    
} else if (opcion === 'C') {
    // Cálculo del área de un círculo
    let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    
    if (isNaN(radio) || radio <= 0) {
        console.log("El valor ingresado debe ser un número positivo.");
    } else {
        let areaCirculo = Math.PI * Math.pow(radio, 2);
        console.log(`El área del círculo es: ${areaCirculo.toFixed(2)}`);
    }
    
} else {
    console.log("Opción no válida. Debe escribir 'T' para Triángulo o 'C' para Círculo.");
}

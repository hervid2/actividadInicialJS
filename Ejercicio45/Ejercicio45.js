// Determinar si un número es positivo y menor que 100. 
// Solicitar al usuario que ingrese un número

let numero = parseFloat(prompt("Ingrese un número:"));

if (numero > 0 && numero < 100) {
    console.log(`El número ${numero} es positivo y menor que 100.`);
} else {
    console.log(`El número ${numero} no cumple la condición de ser positivo y menor que 100.`);
}

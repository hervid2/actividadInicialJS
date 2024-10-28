// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla 
// todos los números impares desde 1 hasta ese número separados por coma.

// Pedir al usuario que ingrese un número entero positivo
let numero = parseInt(prompt("Ingrese un número entero positivo:"));

// Verificar que el número sea válido y positivo
if (!isNaN(numero) && numero > 0) {
    let numerosImpares = []; // Array para almacenar los números impares

    // Iterar desde 1 hasta el número ingresado
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) { // Verificar si el número es impar
            numerosImpares.push(i); // Agregar el número impar al array
        }
    }

    // Mostrar los números impares separados por coma
    console.log("Números impares desde 1 hasta " + numero + ": " + numerosImpares.join(", "));//join() para convertir el array en un string
} else {
    console.log("Por favor, ingrese un número entero positivo válido.");
}

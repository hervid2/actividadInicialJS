// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un 
// número primo o no. 

// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i < Math.sqrt(numero) + 1; i++) {
        if (numero % i === 0) return false; // Si es divisible por cualquier número, no es primo
    }
    return true; // Si no es divisible, es primo
}

// Pedir al usuario un número entero
let numeroUsuario = parseInt(prompt("Ingrese un número entero:"));

// Verificar si el número es primo y mostrar el resultado
if (esPrimo(numeroUsuario)) {
    console.log(`${numeroUsuario} es un número primo.`);
} else {
    console.log(`${numeroUsuario} no es un número primo.`);
}

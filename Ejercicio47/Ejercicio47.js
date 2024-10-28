// Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor
 //de ellos,  el menor o si son iguales. 

 
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Variables para almacenar el mayor y el menor
let mayor;
let menor;

// Verificar si todos los números son iguales
if (numero1 === numero2 && numero2 === numero3) {
    console.log("Los tres números son iguales.");
} else {
    // Determinar el mayor de los tres números
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
    } else {
        mayor = numero3;
    }

    // Determinar el menor de los tres números
    if (numero1 <= numero2 && numero1 <= numero3) {
        menor = numero1;
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        menor = numero2;
    } else {
        menor = numero3;
    }

    // Mostrar los resultados
    console.log(`El mayor de los tres números es: ${mayor}`);
    console.log(`El menor de los tres números es: ${menor}`);
}

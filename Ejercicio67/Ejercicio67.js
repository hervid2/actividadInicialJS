// Escribir un programa que pida al usuario un número entero y muestre por pantalla un 
// triángulo rectángulo como el de más abajo, de altura el número introducido. 

// Solicitar al usuario un número entero positivo
let altura = parseInt(prompt("Ingrese un número entero positivo para la altura del triángulo:"));

// Validar que la altura sea un número entero positivo
if (altura > 0) {
    // Bucle para imprimir cada fila del triángulo
    for (let i = 1; i <= altura; i++) {
        // Generar una fila con asteriscos
        let fila = '*'.repeat(i); // Repite el asterisco 'i' veces
        console.log(fila); // Muestra la fila en la consola
    }
} else {
    console.log("Por favor, ingrese un número entero positivo.");
}

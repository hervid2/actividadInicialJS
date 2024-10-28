// Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los 
// años que ha cumplido (desde 1 hasta su edad).

// Pedir al usuario que ingrese su edad
let edad = parseInt(prompt("Ingrese su edad:"));

// Verificar que la edad sea un número válido
if (!isNaN(edad) && edad > 0) {
    console.log("Los años cumplidos son:");
    // Mostrar todos los años desde 1 hasta la edad
    for (let i = 1; i <= edad; i++) {
        console.log(i);
    }
} else {
    console.log("Por favor, ingrese una edad válida.");
}

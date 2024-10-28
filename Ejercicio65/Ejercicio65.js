// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla 
// la cuenta atrás desde ese número hasta cero separados por comas. 

// Pedir al usuario un número entero positivo
let numero = parseInt(prompt("Ingrese un número entero positivo:"));

// Verificar que el número sea positivo
if (numero > 0) {
    let cuentaRegresiva = [];

    // Llenar el array con la cuenta atrás
    for (let i = numero; i >= 0; i--) {
        cuentaRegresiva.push(i);
    }

    // Mostrar la cuenta atrás separada por comas
    console.log(cuentaRegresiva.join(", "));
} else {
    console.log("Por favor, ingrese un número entero positivo.");
}

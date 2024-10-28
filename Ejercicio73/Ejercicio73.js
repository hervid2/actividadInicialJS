// Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre 
// por pantalla el número de veces que aparece la letra en la frase.

// Pedir al usuario que ingrese una frase
let frase = prompt("Ingrese una frase:");

// Pedir al usuario que ingrese una letra
let letra = prompt("Ingrese una letra:");

// Inicializar un contador para las ocurrencias de la letra
let contador = 0;

// Recorrer la frase
for (let i = 0; i < frase.length; i++) {
    // Comparar la letra actual con la letra buscada
    if (frase[i] === letra) {
        contador++; // Incrementar el contador si hay coincidencia
    }
}

// Mostrar el resultado
console.log(`La letra "${letra}" aparece ${contador} veces en la frase.`);

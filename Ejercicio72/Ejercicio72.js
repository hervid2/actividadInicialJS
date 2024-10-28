// Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a 
// una las letras de la palabra introducida empezando por la última

// Pedir al usuario que ingrese una palabra
let palabra = prompt("Ingrese una palabra:");

// Recorrer la palabra desde el final hacia el principio
for (let i = palabra.length - 1; i >= 0; i--) {
    console.log(palabra[i]); // Mostrar cada letra por consola
}

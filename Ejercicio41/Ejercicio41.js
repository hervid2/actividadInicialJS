// Ingrese una frase que lo identifique como programador de Software y luego
// mostrar esta frase invertida. 

// Solicitar al usuario que ingrese una frase
let frase = prompt("Ingrese una frase:");

// Función para invertir la frase
function invertirFrase(frase) {
    // Convertir la frase en un array de caracteres con split(), invertirlo con reverse() y unirlo de nuevo en un string con join()
    return frase.split("").reverse().join("");
}

// Invertir la frase ingresada
let fraseInvertida = invertirFrase(frase);

// Mostrar la frase invertida
console.log(`La frase invertida es: ${fraseInvertida}`);
alert(`La frase invertida es: ${fraseInvertida}`);
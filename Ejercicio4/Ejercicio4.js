// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
// o impar.

function parImpar() {
    const numeroIngresado = parseInt(prompt("Ingrese un número de tipo entero:"));

    if (isNaN(numeroIngresado)) {
        alert("Por favor, ingrese un número de tipo entero válido!");
        return;
    }

    if (numeroIngresado % 2 === 0) {
        alert(numeroIngresado + " es un número par!");
    }
    else {
        alert(numeroIngresado + " es un número impar!");
    }
}
parImpar();

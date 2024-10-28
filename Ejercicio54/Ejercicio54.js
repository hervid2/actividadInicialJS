// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo,
//      en caso contrario indicar con un mensaje que la operación no es posible realizarla.


let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));


if (numero1 > numero2) {
    let resultado = numero1 - numero2; // Realizar la resta
    console.log(`El resultado de restar ${numero2} de ${numero1} es: ${resultado}`);
} else {
    console.log("La operación no es posible. El primer número debe ser mayor que el segundo.");
}

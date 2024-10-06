// 1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o 
// menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 

function DeterminarMayoriaEdad(){
    let edad = parseInt(prompt("Por favor ingrese su edad: "));

    if (isNaN(edad)) {
        alert("Ingrese su edad solo en caracteres numéricos!");
        return;
    }

    if (edad <= 18 && edad > 0) {
        alert("La persona es menor de edad!");
    } else if (edad <= 0) {
        alert("La edad ingresada no es válida");
        return;
    } else {
        alert("La persona es mayor de edad!");
    }
}
DeterminarMayoriaEdad();
// 1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o 
// menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 

let edad = prompt("Por favor ingrese su edad: ");

if (edad <= 18 && edad > 0 ) {
    console.log("La persona es menor de edad!");
} else if(edad<=0){
    console.log("La edad ingresada no es válida");
} else 
console.log("La persona es mayor de edad!");


// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
// no.

function determinarTributo() {
    console.log("Dian Impuestos y aduanas nacionales:");
    console.log("------------------------------------");
    console.log(" ");
    const edad = prompt("Ingrese su edad: ");
    const ingresos = prompt("Ingrese su ingreso mensual: ");

    if (edad > 16 && ingresos >= 1000) {
        console.log("El ciudadano tiene " + edad + ", y devenga $" + ingresos + ", por lo tanto debe tributar!");

    } else {
        console.log("El ciudadano tiene " + edad + ", y devenga $" + ingresos + ", por lo tanto NO debe tributar!");
    }
}
determinarTributo();
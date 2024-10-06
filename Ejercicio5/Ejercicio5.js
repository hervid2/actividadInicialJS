// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
// no.

function determinarTributo() {
   
    const edad = parseInt(prompt("Ingrese su edad: "));
    const ingresos = parseFloat(prompt("Ingrese su ingreso mensual: "));

    if(edad< 0 || ingresos < 0){
        alert("Error: edad e ingresos no pueden ser negativos");
        return;
    }

    if (edad > 16 && ingresos >= 1000) {
        alert("El ciudadano tiene " + edad + ", y devenga $" + ingresos + ", por lo tanto debe tributar!");

    } else {
        alert("El ciudadano tiene " + edad + ", y devenga $" + ingresos + ", por lo tanto NO debe tributar!");
    }
}
determinarTributo();
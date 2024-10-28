// En un colegio, se necesita hacer una selección de basquetbol que represente 
// al colegio, para lo cual es requisito indispensable que los postulantes
//  sean menores o iguales a 19 años, con una estatura de más de 175 cm y 
//  el peso tiene que estar entre los 80 kg y 75. 

// Función para verificar si un postulante es elegible
function esElegible(edad, estatura, peso) {
    // Verificar los requisitos de elegibilidad
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
        return true; // Elegible
    } else {
        return false; // No elegible
    }
}

// Solicitar los datos del postulante
let edadPostulante = parseInt(prompt("Ingrese la edad del postulante:"));
let estaturaPostulante = parseFloat(prompt("Ingrese la estatura del postulante en cm:"));
let pesoPostulante = parseFloat(prompt("Ingrese el peso del postulante en kg:"));

// Verificar si el postulante es elegible
if (esElegible(edadPostulante, estaturaPostulante, pesoPostulante)) {
    console.log("El postulante es elegible para la selección de baloncesto.");
} else {
    console.log("El postulante no es elegible para la selección de baloncesto.");
}

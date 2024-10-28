// Consideramos la asignación de una calificación literal a un rango dado
//  de calificaciones numéricas de la siguiente manera: Rango de calificaciones:
//    9.1 a 10 Asignar la calificación de A equivale a Excelente 8.1 a 9 Asignar 
//    la calificación de A equivale a Muy bien 7.5 a 8 Asignar la calificación
//     de A equivale a Bien Menor a 7.5 asignar la calificación de NA No Aprobado. 

// Función para asignar la calificación
function asignarCalificacion(nota) {
    if (nota >= 9.1 && nota <= 10) {
        return "A - Excelente";
    } else if (nota >= 8.1 && nota <= 9) {
        return "A - Muy bien";
    } else if (nota >= 7.5 && nota < 8.1) {
        return "A - Bien";
    } else {
        return "NA - No Aprobado";
    }
}

// Solicitar al usuario que ingrese la calificación
let calificacion = parseFloat(prompt("Ingrese la calificación numérica:"));

// Verificar si la entrada es un número válido
if (isNaN(calificacion)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    // Llamar a la función para obtener la calificación literal
    let resultado = asignarCalificacion(calificacion);
    
    // Mostrar el resultado
    console.log(`La calificación literal para la nota ${calificacion} es: ${resultado}`);
}


// Hacer un programa que permita ingresar n cantidad de cursos, 
// si la cantidad de cursos que lleva el alumno es menor que 6 
// el pago será $2.000.000 por cada curso, pero si la cantidad de cursos
//  es mayor que 6 el pago será únicamente de $1.200.000. 

// Función para calcular el costo total según la cantidad de cursos
function calcularCosto(cantidadCursos) {
    const costoCursoBajo = 2000000; // Costo por curso si hay menos de 6
    const costoCursoAlto = 1200000;  // Costo por curso si hay más de 6

    if (cantidadCursos < 6) {
        return cantidadCursos * costoCursoBajo; // Cálculo para menos de 6 cursos
    } else {
        return cantidadCursos * costoCursoAlto; // Cálculo para 6 o más cursos
    }
}

// Solicitar la cantidad de cursos al usuario
let cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));

// Validar la entrada
if (isNaN(cantidadCursos) || cantidadCursos <= 0) {
    console.log("Por favor, ingrese un número válido de cursos.");
} else {
    // Calcular el costo total
    const costoTotal = calcularCosto(cantidadCursos);

    // Mostrar el resultado
    console.log(`El costo total para ${cantidadCursos} cursos es: $${costoTotal.toLocaleString()}`);
}

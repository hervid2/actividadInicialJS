// Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual 
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, 
// cuantos obtuvieron las siguientes calificaciones: 
// a. «a» = menor que 100 y mayor igual que 90 
// b.  «b» = menor que 90 y mayor igual que 80 
// c.  «c» = menor que 80 y mayor igual que 70 
// d.  «d» = menor que 70 y mayor igual que 60 

// Inicializar variables
let notas = [];
let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"));

// Validar que la cantidad de alumnos sea positiva
if (cantidadAlumnos <= 0) {
    console.log("La cantidad de alumnos debe ser mayor que cero.");
} else {
    // Ciclo para ingresar las notas de los alumnos
    for (let i = 0; i < cantidadAlumnos; i++) {
        let nota;
        
        // Bucle para asegurar que se ingrese una nota válida
        do {
            nota = parseInt(prompt(`Ingrese la nota del alumno ${i + 1} (entre 1 y 100):`));
        } while (isNaN(nota) || nota < 1 || nota > 100); // Validar que la nota esté entre 1 y 100

        notas.push(nota); // Agregar la nota al array
    }

    // Calcular la nota alta, la nota baja y los conteos
    let notaAlta = Math.max(...notas);
    let notaBaja = Math.min(...notas);
    let conteo100 = notas.filter(n => n === 100).length;
    let conteoA = notas.filter(n => n < 100 && n >= 90).length;
    let conteoB = notas.filter(n => n < 90 && n >= 80).length;
    let conteoC = notas.filter(n => n < 80 && n >= 70).length;
    let conteoD = notas.filter(n => n < 70 && n >= 60).length;

    // Mostrar resultados
    console.log(`La nota más alta es: ${notaAlta}`);
    console.log(`La nota más baja es: ${notaBaja}`);
    console.log(`Número de alumnos con nota 100: ${conteo100}`);
    console.log(`Número de alumnos con nota 'A': ${conteoA}`);
    console.log(`Número de alumnos con nota 'B': ${conteoB}`);
    console.log(`Número de alumnos con nota 'C': ${conteoC}`);
    console.log(`Número de alumnos con nota 'D': ${conteoD}`);
}

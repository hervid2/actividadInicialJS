// Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10

// Recorrer los números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(`Tabla de multiplicar del ${i}:`);
    
    // Para cada número, generar la tabla de multiplicar
    for (let j = 1; j <= 10; j++) {
        let resultado = i * j; // Calcular el resultado de la multiplicación
        console.log(`${i} x ${j} = ${resultado}`); // Mostrar el resultado
    }
    
    console.log(''); // Imprimir una línea en blanco para separar las tablas
}



// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el 
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que 
// dura la inversión. 

// Función para calcular el capital obtenido
function calcularInversion(cantidad, interes, años) {
    let capital = cantidad;
    let resultados = []; // Array para almacenar los resultados anuales

    for (let i = 1; i <= años; i++) {
        capital += capital * (interes / 100); // Calcula el nuevo capital
        resultados.push(`Año ${i}: Capital = $${capital.toFixed(2)}`); // Almacena el resultado en el array
    }

    return resultados; // Retorna el array de resultados
}

// Solicitar al usuario la cantidad a invertir, el interés anual y el número de años
let cantidadInvertir = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interesAnual = parseFloat(prompt("Ingrese el interés anual (%):"));
let numeroAños = parseInt(prompt("Ingrese el número de años:"));

// Validar que los datos ingresados sean correctos
if (cantidadInvertir > 0 && interesAnual >= 0 && numeroAños > 0) {
    // Calcular la inversión y obtener los resultados
    let resultados = calcularInversion(cantidadInvertir, interesAnual, numeroAños);
    
    // Mostrar los resultados en la consola
    resultados.forEach(resultado => console.log(resultado));
} else {
    console.log("Por favor, ingrese valores válidos para la inversión, interés y años.");
}

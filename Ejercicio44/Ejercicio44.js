// Realice el siguiente algoritmo para convertir pesos a dolores y a euros, 
// utilizando como constante el valor de una moneda. 

// Constantes para la tasa de cambio
const TASA_DOLAR = 4300; // Ejemplo: 1 USD = 4300 Pesos
const TASA_EURO = 5100;  // Ejemplo: 1 EUR = 5100 Pesos

// Función para convertir pesos a dólares
function convertirAPesosADolares(pesos) {
    return (pesos / TASA_DOLAR).toFixed(2); // Redondear a 2 decimales
}

// Función para convertir pesos a euros
function convertirAPesosAEuros(pesos) {
    return (pesos / TASA_EURO).toFixed(2); // Redondear a 2 decimales
}

// Solicitar al usuario la cantidad en pesos
let pesos = parseFloat(prompt("Ingrese la cantidad en pesos colombianos:"));

// Realizar las conversiones
let dolares = convertirAPesosADolares(pesos);
let euros = convertirAPesosAEuros(pesos);

// Mostrar los resultados
console.log(`La cantidad de $${pesos} pesos equivale a:`);
console.log(`$${dolares} dólares (USD)`);
console.log(`$${euros} euros (EUR)`);

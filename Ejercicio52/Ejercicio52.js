// En cierta empresa se les paga a sus trabajadores de la siguiente forma:
//  si el empleado es de planta, la hora trabajada se le paga a $20000,
//   si el empleado es administrativo, la hora trabajada se le paga a $10000.
//    Para calcular su pago es necesario conocer el total de horas trabajadas. 


function calcularPago(tipoEmpleado, horasTrabajadas) {
    let tarifaPorHora;

    // Determinar la tarifa según el tipo de empleado
    if (tipoEmpleado === "planta") {
        tarifaPorHora = 20000; // Tarifa para empleados de planta
    } else if (tipoEmpleado === "administrativo") {
        tarifaPorHora = 10000; // Tarifa para empleados administrativos
    } else {
        return "Tipo de empleado no reconocido"; // Manejo de tipo de empleado no válido
    }

    // Calcular el pago total
    let pagoTotal = tarifaPorHora * horasTrabajadas;
    return pagoTotal;
}

// Solicitar al usuario el tipo de empleado
let tipoEmpleado = prompt("Ingrese el tipo de empleado (planta/administrativo):").toLowerCase();

// Solicitar al usuario el total de horas trabajadas
let horasTrabajadas = parseFloat(prompt("Ingrese el total de horas trabajadas:"));

// Calcular el pago total
let totalPago = calcularPago(tipoEmpleado, horasTrabajadas);

// Mostrar el resultado
if (typeof totalPago === "number") {
    console.log(`El pago total para el empleado de tipo "${tipoEmpleado}" que trabajó ${horasTrabajadas} horas es: $${totalPago}.`);
} else {
    console.log(totalPago); // Mensaje de error
}

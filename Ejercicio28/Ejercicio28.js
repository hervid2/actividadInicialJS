// Calcular el sueldo de un empleado dados como datos de entrada:  a. Nombre. b. horas de trabajo. c. pago en hora. 

let sueldoEmplado;
let nombreEmpleado = prompt("Ingrese el nombre del empleado:");
let horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas:"));
const pagoHora = 50.00;

sueldoEmplado = horasTrabajadas * pagoHora;

alert(`El empleado ${nombreEmpleado}, trabajó durante ${horasTrabajadas} horas, el sueldo a pagar es de: $${sueldoEmplado}`);
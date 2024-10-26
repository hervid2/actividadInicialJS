// Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg
// ¿cuántos Kg transporta? 

let totalCajas = parseInt(prompt("Ingrese la cantidad de cajas a transportar:"));
const caja = 748;
let totalCarga = totalCajas * caja;

alert(`El total de kg que el camión transporta es de ${totalCarga}`);
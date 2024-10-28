// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550.
//  Calcular el monto total de la venta, según la cantidad de artículos solicitados
//   durante el día. 

// Precios de los artículos
const precioLibro = 10000;
const precioCuaderno = 7550;
const precioLapicero = 5550;

// Solicitar la cantidad de artículos vendidos durante el día
let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros vendidos:"));
let cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:"));
let cantidadLapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:"));

// Calcular el total por cada tipo de artículo
let totalLibros = cantidadLibros * precioLibro;
let totalCuadernos = cantidadCuadernos * precioCuaderno;
let totalLapiceros = cantidadLapiceros * precioLapicero;

// Calcular el monto total de la venta
let montoTotal = totalLibros + totalCuadernos + totalLapiceros;

// Mostrar los resultados
console.log(`Total de libros vendidos: ${cantidadLibros} - Total: $${totalLibros}`);
console.log(`Total de cuadernos vendidos: ${cantidadCuadernos} - Total: $${totalCuadernos}`);
console.log(`Total de lapiceros vendidos: ${cantidadLapiceros} - Total: $${totalLapiceros}`);
console.log(`Monto total de la venta: $${montoTotal}`);

alert(`Monto total de la venta: $${montoTotal}`);

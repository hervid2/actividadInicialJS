// Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un
// programa que ingresando el costo de los medicamentos calcule el descuento y el precio final. 

let precioInicial = parseFloat(prompt("Ingrese el precio sin descuento:"));

let descuento = 0.10;

let precioFinal = precioInicial - (precioInicial * descuento);
alert ("el precio final con descuento es de " + precioFinal);


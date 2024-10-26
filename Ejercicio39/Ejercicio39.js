// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
//  Considere que se cobra por m2 y realice el código que representen el algoritmo que
//   le permita ir generando presupuestos para cada cliente. 

let precioMetroCuadrado = parseFloat(prompt("Por favor ingrese el valor por metro cuadrado:"));
let requerimientoCliente = parseFloat(prompt("Por favor ingrese la cantidad en  metros cuadrados que el cliente requiere sean pintados:"));

let cotizacionCliente = precioMetroCuadrado * requerimientoCliente;

alert(`EL valor a cobrar por el requerimiento del cliente es de $${cotizacionCliente.toFixed(2)}`);
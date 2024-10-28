// En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo
//  C 20% de descuento. 

// Función para calcular el descuento
function calcularDescuento(precio, tipoMembresia) {
    let descuento = 0;

    // Determinar el porcentaje de descuento según el tipo de membresía
    switch (tipoMembresia.toUpperCase()) {
        case 'A':
            descuento = 0.10; // 10%
            break;
        case 'B':
            descuento = 0.15; // 15%
            break;
        case 'C':
            descuento = 0.20; // 20%
            break;
        default:
            console.log("Tipo de membresía no válido.");
            return precio; // Sin descuento si el tipo de membresía no es válido
    }

    // Calcular el precio con descuento
    let precioConDescuento = precio - (precio * descuento);
    return precioConDescuento;
}

// Solicitar el precio del helado y el tipo de membresía
let precioHelado = parseFloat(prompt("Ingrese el precio del helado:"));
let tipoMembresia = prompt("Ingrese su tipo de membresía (A, B o C):");

// Calcular el precio final
let precioFinal = calcularDescuento(precioHelado, tipoMembresia);

// Mostrar el precio final
console.log(`El precio final del helado con descuento es: $${precioFinal.toFixed(2)}`);

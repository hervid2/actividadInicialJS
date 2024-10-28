// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado
//  excede los $130.000 el descuento será del 15%, de lo contrario no hay descuento

function calcularTotal(consumo) {
    let descuento = 0;

    // Verificar si el consumo excede los $130,000 para aplicar el descuento
    if (consumo > 130000) {
        descuento = consumo * 0.15; // Calcular el 15% de descuento
    }

    // Calcular el total después del descuento
    let totalAPagar = consumo - descuento;
    return totalAPagar;
}

// Solicitar el consumo al usuario
let consumo = parseFloat(prompt("Ingrese el monto total del consumo en el restaurante:"));

// Calcular el total a pagar
let total = calcularTotal(consumo);

// Mostrar el resultado
if (consumo > 130000) {
    console.log(`El consumo total es de $${consumo}. Se aplica un descuento de $${(consumo * 0.15).toFixed(2)}. Total a pagar: $${total.toFixed(2)}.`);
} else {
    console.log(`El consumo total es de $${consumo}. No hay descuento. Total a pagar: $${total.toFixed(2)}.`);
}

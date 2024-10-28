// Calcular el valor total del valor de 5 productos, el IVA y el subtotal,
//  visualizar los resultados de: Iva, Subtotal y Total de la compra de los artículos. 


const tasaIVA = 0.19;

// Inicializar el subtotal
let subtotal = 0;

// Solicitar el precio de los 5 productos al usuario.
for (let i = 1; i <= 5; i++) {
    let precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
    
    // Validar que el precio ingresado sea un número positivo
    if (isNaN(precioProducto) || precioProducto < 0) {
        console.error("El precio ingresado no es válido. Debe ser un número positivo.");
        i--; // Repetir la iteración para este producto
        continue; // Saltar a la siguiente iteración del bucle
    }

    subtotal += precioProducto; // Sumar el precio al subtotal
}

// Calcular el IVA y el total
let iva = subtotal * tasaIVA;
let total = subtotal + iva;

// Mostrar los resultados
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`IVA (19%): $${iva.toFixed(2)}`);
console.log(`Total de la compra: $${total.toFixed(2)}`);

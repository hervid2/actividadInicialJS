// Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos
// con un 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar
// por cada producto y el total de la compra. 

let valor1 = parseFloat(prompt("Ingrese el valor del producto 1:"));
let valor2 = parseFloat(prompt("Ingrese el valor del producto 2:"));
let valor3 = parseFloat(prompt("Ingrese el valor del producto 3:"));
let valor4 = parseFloat(prompt("Ingrese el valor del producto 4:"));
let valor5 = parseFloat(prompt("Ingrese el valor del producto 5:"));

function calcularTotal() {
    let valor1Desc = valor1 - (valor1 * 0.05);
    let valor2Desc = valor2 - (valor2 * 0.05);
    let valor4Desc = valor4 - (valor4 * 0.02);
    let valor5Desc = valor5 - (valor5 * 0.02);

    let total = valor1Desc + valor2Desc + valor3 + valor4Desc + valor5Desc;
    return {
        total,
        valor1Desc,
        valor2Desc,
        valor3,
        valor4Desc,
        valor5Desc
    };
}

// Llamar a la función para obtener los valores calculados
let resultados = calcularTotal();

console.log(`El valor del producto 1 fue de $${valor1} y con descuento queda en $${resultados.valor1Desc}`);
console.log(`El valor del producto 2 fue de $${valor2} y con descuento queda en $${resultados.valor2Desc}`);
console.log(`El valor del producto 3 fue de $${valor3} y sin descuento queda en $${resultados.valor3}`);
console.log(`El valor del producto 4 fue de $${valor4} y con descuento queda en $${resultados.valor4Desc}`);
console.log(`El valor del producto 5 fue de $${valor5} y con descuento queda en $${resultados.valor5Desc}`);
console.log(`El valor total con descuentos es de $${resultados.total}`);

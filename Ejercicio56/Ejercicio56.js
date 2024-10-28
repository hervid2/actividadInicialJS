// Un banco paga intereses a los depósitos dependiendo del saldo. 
// Si el saldo es menor a $100.000 se paga un interés anual de 3%,
//  pero si su saldo es mayor a $100.000 se paga un interés anual de 4%. 
//  Al final mostrar el saldo final y el interés pagado. 

// Función para calcular el interés y el saldo final
function calcularInteres(saldo) {
    let interes = 0;

    // Determinar el tipo de interés según el saldo
    if (saldo < 100000) {
        interes = saldo * 0.03; // 3% de interés
    } else {
        interes = saldo * 0.04; // 4% de interés
    }

    // Calcular el saldo final
    let saldoFinal = saldo + interes;
    return { saldoFinal, interes }; // Retornar el saldo final y el interés
}

// Solicitar el saldo inicial al usuario
let saldoInicial = parseFloat(prompt("Ingrese su saldo inicial:"));

// Calcular el interés y el saldo final
let { saldoFinal, interes } = calcularInteres(saldoInicial);

// Mostrar los resultados
console.log(`El interés pagado es: $${interes.toFixed(2)}`);
console.log(`El saldo final es: $${saldoFinal.toFixed(2)}`);

// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355 pesos y un IVA 20%.

let minutos  = parseFloat(prompt("¿Cuántos minutos hablo?"));

function calculo (m){
    const  valorMinuto = 355;
    const  IVA = 0.2;

    let costoTotal = m * valorMinuto + m * valorMinuto * IVA;

    alert(`El costo total de la llamada es: ${costoTotal}`);
}
calculo(minutos);
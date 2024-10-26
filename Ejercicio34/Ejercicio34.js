// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado
 //de un depósito. a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
 //  b. Volumen = PI *(radio^2)* H (altura del depósito).
//   El tiempo se encuentra en minutos. Normalmente se mide el volumen
// en litros y el tiempo en segundos. 


const PI = Math.PI;

// Solicitamos los datos al usuario
let radio = parseFloat(prompt("Ingrese el radio del depósito en metros:"));
let altura = parseFloat(prompt("Ingrese la altura del depósito en metros:"));
let caudal = parseFloat(prompt("Ingrese el caudal del agua en litros por segundo:"));

// Función para calcular el volumen del depósito cilíndrico
function calcularVolumenDeposito(radio, altura) {
    // Volumen en litros (1 m³ = 1000 litros)
    return PI * Math.pow(radio, 2) * altura * 1000;
}

// Función para calcular el tiempo necesario para llenar el depósito
function calcularTiempoLlenado(caudal, volumen) {
    // El tiempo se calcula en segundos
    let tiempoEnSegundos = volumen / caudal;
    // Convertimos segundos a minutos
    return tiempoEnSegundos / 60;
}

// Calculamos el volumen del depósito
let volumen = calcularVolumenDeposito(radio, altura);

// Calculamos el tiempo de llenado
let tiempoEnMinutos = calcularTiempoLlenado(caudal, volumen);

// Mostramos los resultados con máximo dos decimales usando tofixed()
alert(`El volumen del depósito es de ${volumen.toFixed(2)} litros.`);
alert(`El tiempo estimado para llenar el depósito es de ${tiempoEnMinutos.toFixed(2)} minutos.`);

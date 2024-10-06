// Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil expresada
// en kilómetros por hora, proporcione la velocidad en metros por segundo. 

let velocidadKMH = parseFloat(prompt("ingrese la velocidad en km/h"));

function calculo (velocidadKMH){
    let velocidadMS = velocidadKMH / 3.6;
    alert(`La velocidad es: ${velocidadMS} m/s`);
}
calculo(velocidadKMH);
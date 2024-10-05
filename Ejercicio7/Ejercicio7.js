// los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
// de impositivo que le corresponde.


function porcentajeImpuesto() {
    
    let rentaAnual = prompt("Introduzca su renta anual:");

    if (isNaN(rentaAnual) || rentaAnual < 0) {
        console.log("Por favor, introduzca un valor de renta válido!");
        return;
    }

    let porcentajeImpositivo = 0;

    if (rentaAnual >= 10000 && rentaAnual <= 20000) {
        porcentajeImpositivo = 5;
    } else if (rentaAnual > 20000 && rentaAnual <= 35000) {
        porcentajeImpositivo = 10;
    } else if (rentaAnual > 35000 && rentaAnual <= 60000) {
        porcentajeImpositivo = 20;
    } else if (rentaAnual > 60000) {
        porcentajeImpositivo = 45;
    } else {
        console.log("No debe pagar impuesto!");  
        return; 
    }

    console.log(`El porcentaje de impuesto a pagar según su renta anual es de ${porcentajeImpositivo}%.`);
}

porcentajeImpuesto();
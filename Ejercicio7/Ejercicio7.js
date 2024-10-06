// los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
// de impositivo que le corresponde.


function porcentajeImpuesto() {
    
    let rentaAnual = parseFloat(prompt("Introduzca su renta anual:"));

    if (isNaN(rentaAnual) || rentaAnual < 0) {
        console.log("Por favor, introduzca un valor de renta válido!");
        return;
    }


    if (rentaAnual >= 10000 && rentaAnual < 20000) {
        alert(`El porcentaje de impuesto a pagar según su renta anual es del 5% (${rentaAnual.toFixed(2) * 0.05})`);
    } else if (rentaAnual >= 20000 && rentaAnual < 35000) {
        alert(`El porcentaje de impuesto a pagar según su renta anual es del 10% (${rentaAnual.toFixed(2) * 0.1})`);
    } else if (rentaAnual >= 35000 && rentaAnual <= 60000) {
        alert(`El porcentaje de impuesto a pagar según su renta anual es del 20% (${rentaAnual.toFixed(2) * 0.2})`);
    } else if (rentaAnual > 60000) {
        alert(`El porcentaje de impuesto a pagar según su renta anual es del 45% (${rentaAnual.toFixed(2) * 0.45})`);
    } else {
        console.log("No debe pagar impuesto!");  
        return; 
    }
}

porcentajeImpuesto();
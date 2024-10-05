// En una determinada empresa, sus empleados son evaluados al final de cada año. Los
// puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando,
// traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados
// pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas.
// A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.
// a. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la
// puntuación del nivel.
// b. Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más
// Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento,
// así como la cantidad de dinero que recibirá el usuario.

function calcularBeneficioAnual() {
    
    const puntaje = parseFloat(prompt("Ingrese la puntuación del empleado(0.0, 0.4, o 0.6):"));
    const bonoBase = 2400;
    let calificacion =String;
    
    if (puntaje === 0.0) {
        calificacion = "Inaceptable";
    } else if (puntaje === 0.4) {
        calificacion = "Aceptable";
    } else if (puntaje >= 0.6) {
        calificacion = "Meritorio";
    } else {
        alert("Puntuación no válida. Debe ser 0.0, 0.4 o 0.6 o más!");
        return; 
    }

    const totalBono = puntaje * bonoBase;

    alert(`Tu nivel de rendimiento es: ${calificacion}.`);
    alert(`Recibirás un total de: ${totalBono}€.`);
}

calcularBeneficioAnual();
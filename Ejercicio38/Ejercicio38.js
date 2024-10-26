// Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
//  Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto.
//   ¿Qué parte le corresponde a Lorena? 

function calcularParteLorena() {
    // Partes que corresponden a Martín y Jairo
    let numeradorMartin = 2;
    let denominadorMartin = 3;

    let numeradorJairo = 1;
    let denominadorJairo = 4;

    // Calcular el mínimo común múltiplo (MCM) de los denominadores para sumar fracciones
    let denominadorComún = mcm(denominadorMartin, denominadorJairo);

    // Ajustar los numeradores al denominador común
    let numeradorMartinAjustado = numeradorMartin * (denominadorComún / denominadorMartin);
    let numeradorJairoAjustado = numeradorJairo * (denominadorComún / denominadorJairo);

    // Sumar las partes de Martín y Jairo
    let numeradorTomado = numeradorMartinAjustado + numeradorJairoAjustado;

    // Calcular la parte de Lorena como fracción
    let numeradorLorena = denominadorComún - numeradorTomado;
    let denominadorLorena = denominadorComún;

    // Simplificar la fracción de Lorena usando el MCD
    let divisorComun = mcd(numeradorLorena, denominadorLorena);
    numeradorLorena /= divisorComun;
    denominadorLorena /= divisorComun;

    // Mostrar el resultado en formato fraccionario
    console.log(`La parte que le corresponde a Lorena es: ${numeradorLorena}/${denominadorLorena}`);
}

// Función para calcular el Mínimo Común Múltiplo (MCM)
function mcm(a, b) {
    return (a * b) / mcd(a, b);
}

// Función para calcular el Máximo Común Divisor (MCD) usando el algoritmo de Euclides
function mcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

calcularParteLorena();

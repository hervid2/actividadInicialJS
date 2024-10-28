// Se desea realizar una aplicación que ingrese el nombre del mes y mostrar 
// que signo zodiacal pertenece, para ello usar if_else anidados. 

// Función para determinar el signo zodiacal
function obtenerSignoZodiacal(mes) {
    let signo;

    // Convertir el mes a minúsculas para una comparación más fácil
    mes = mes.toLowerCase();

    // Usar if-else anidados para determinar el signo zodiacal
    if (mes === "enero") {
        signo = "Capricornio (hasta el 19) / Acuario (20 en adelante)";
    } else if (mes === "febrero") {
        signo = "Acuario (hasta el 18) / Piscis (19 en adelante)";
    } else if (mes === "marzo") {
        signo = "Piscis (hasta el 20) / Aries (21 en adelante)";
    } else if (mes === "abril") {
        signo = "Aries (hasta el 19) / Tauro (20 en adelante)";
    } else if (mes === "mayo") {
        signo = "Tauro (hasta el 20) / Géminis (21 en adelante)";
    } else if (mes === "junio") {
        signo = "Géminis (hasta el 20) / Cáncer (21 en adelante)";
    } else if (mes === "julio") {
        signo = "Cáncer (hasta el 22) / Leo (23 en adelante)";
    } else if (mes === "agosto") {
        signo = "Leo (hasta el 22) / Virgo (23 en adelante)";
    } else if (mes === "septiembre") {
        signo = "Virgo (hasta el 22) / Libra (23 en adelante)";
    } else if (mes === "octubre") {
        signo = "Libra (hasta el 22) / Escorpio (23 en adelante)";
    } else if (mes === "noviembre") {
        signo = "Escorpio (hasta el 21) / Sagitario (22 en adelante)";
    } else if (mes === "diciembre") {
        signo = "Sagitario (hasta el 21) / Capricornio (22 en adelante)";
    } else {
        signo = "Mes no válido. Por favor ingrese un mes correcto.";
    }

    return signo;
}

// Solicitar al usuario que ingrese el nombre del mes
let mesIngresado = prompt("Ingrese el nombre del mes:");

let resultado = obtenerSignoZodiacal(mesIngresado);

// Mostrar el resultado
console.log(`El signo zodiacal para el mes de ${mesIngresado} es: ${resultado}`);

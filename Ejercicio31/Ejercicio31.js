// Se requiere calcular la distancia entre dos puntos, realizar el código 
//que permita hallar la solución, por favor utilizar funciones matemáticas para ello.:
// a.  rc((x2-x1)^2 + (y2-y1)^2

// Función para calcular la distancia entre dos puntos
function calcularDistancia(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));//Math.sqrt()es una formula matematica para hallar la raiz, y math.pow() para hallar la potencia
    return distancia;
}

// Solicitar los valores de los puntos al usuario
let x1 = parseFloat(prompt("Ingrese la coordenada x1:"));
let y1 = parseFloat(prompt("Ingrese la coordenada y1:"));
let x2 = parseFloat(prompt("Ingrese la coordenada x2:"));
let y2 = parseFloat(prompt("Ingrese la coordenada y2:"));

// Calcular la distancia
let distancia = calcularDistancia(x1, y1, x2, y2);

// Mostrar el resultado
alert(`La distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es: ${distancia}`);

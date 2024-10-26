// Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales
//cada uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno
// por $87000. Después de pagar le sobran $91000. ¿Cuánto dinero tenía? 

const precioLlaves = 11500;
const bomba = 1168000;
const cajasPernos = 87000;
let dineroSobrante = 91000;

let dineroInicial = dineroSobrante + (precioLlaves * 5) + bomba + (cajasPernos * 3)

console.log(`El dinero inicial del jefe de obra era de ${dineroInicial}`);

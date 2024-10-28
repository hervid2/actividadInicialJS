// Escriba una expresión regular que reconozca las cadenas de doble comillas.
//  Debe permitir la presencia de comillas y caracteres escapados. 

const texto = `Este es un "ejemplo de cadena" que incluye "comillas \\"escapadas\\"" y más texto.`;
const regex = /"([^"\\]|\\.)*"/g;
const coincidencias = texto.match(regex);

console.log(coincidencias); 
// Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, 
// pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron.
//  Realice el código que representen el algoritmo para solucionar este problema

let fechaActual = new Date();
let añoActual = fechaActual.getFullYear();

let nacimientoCandidato = parseInt(prompt("Por favor ingrese el año de nacimiento del candidato:"));

let edadCandidato = añoActual - nacimientoCandidato;

alert(`La edad del candidato es de ${edadCandidato} años`);
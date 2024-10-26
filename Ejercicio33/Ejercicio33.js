// Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.

let edadMadre = parseInt(prompt("Ingrese la edad de la madre:"));
let edadHijo = parseInt(prompt("Ingrese la edad del hijo:"));
let edadMadreNacimiento = edadMadre - edadHijo;

if (edadMadreNacimiento < 0) {
    alert("Error: La edad del hijo no puede ser mayor que la edad de la madre.");
} else {
    alert(`La edad de la madre al momento que este hij@ nació era de ${edadMadreNacimiento} años.`);
}
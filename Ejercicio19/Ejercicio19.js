// Escribir un programa que calcule el área y el volumen de un cilindro.

let radio = parseFloat(prompt("Ingrese el radio del cilindro"));
let altura = parseFloat(prompt("Ingrese la altura del radio"));

function calculo(r, a) {
  let area = 2 * Math.PI * r * (r + a); //?
  let volumen = Math.PI * r ** 2 * a;

  alert(`El area del cilindro es: ${area}
        El volumen del cilindro es ${volumen}`);
}
calculo(radio, altura);

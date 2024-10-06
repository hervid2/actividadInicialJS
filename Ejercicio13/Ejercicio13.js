// Escribir un programa que lea 4 números y calcule la media.

function calcularMedia(...numeros) {
    let arreglo = numeros[0];
console.log(arreglo); 

  let suma = 0;
  for (let num of arreglo) {
    console.log(num);
    
    suma += num;
  }
  let promedio = suma / arreglo.length;
  return promedio;
}

let numeros = [];

while (true) {
  let num = parseFloat(prompt(`Ingrese el número ó 0 para salir`));
  if (num != 0) {
    numeros.push(num);
  } else {
    break;
  }
}

let resultado = calcularMedia(numeros);
alert(resultado);
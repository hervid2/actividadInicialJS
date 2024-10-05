// Escribir un programa que calcule el área de un triángulo.


function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }

  let base = parseFloat(prompt("Por favor ingrese la base del triángulo:"));
  let altura = parseFloat(prompt("Por favor ingrese la altura del triángulo:"));
  let area = calcularAreaTriangulo(base, altura);
  
  alert("El área del triángulo es de: " + area + " cm²");
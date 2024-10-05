// Escribir un programa que calcule la longitud y el área de una circunferencia.

function longitudCircunferencia(radio) {
    return 2 * Math.PI * radio;
  }
  
  function areaCircunferencia(radio) {
    return Math.PI * Math.pow(radio, 2);
  }
  
  const radio = parseFloat(prompt("Por favor ingrese el radio de la circunferencia:"));
  const longitud = longitudCircunferencia(radio);
  const area = areaCircunferencia(radio);
  console.log(`La longitud de la circunferencia es: ${longitud}`);
  console.log(`El área de la circunferencia es: ${area}`);
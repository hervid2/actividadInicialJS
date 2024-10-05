// Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros/segundo.

function calcularVelocidadProyectil(distanciaMetros, tiempoSegundos) {
 
    const velocidad = distanciaMetros / tiempoSegundos;
    return velocidad;
  }
 
  const distanciaKilometros = 2; 
  const tiempoMinutos = 5;
  
  const distanciaMetros = distanciaKilometros * 1000; 
  const tiempoSegundos = tiempoMinutos * 60; 
  
  const velocidadMetrosPorSegundo = calcularVelocidadProyectil(distanciaMetros, tiempoSegundos);
  
 console.log("La velocidad del proyectil es:", velocidadMetrosPorSegundo, "metros por segundo.");
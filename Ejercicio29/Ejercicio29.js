// Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente
// para obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.

function calculo() {
  function validarNota(nota) {
    return !isNaN(nota) && nota >= 1 && nota <= 5;
  }

  let e1, e2, e3, e4, promedio;

  do {
    e1 = parseFloat(prompt("Ingrese la nota del primer examen :"));
    if (!validarNota(e1)) {
      alert("Nota inválida");
    }
  } while (!validarNota(e1));

  do {
    e2 = parseFloat(prompt("Ingrese la nota del segundo examen :"));
    if (!validarNota(e2)) {
      alert("Nota inválida");
    }
  } while (!validarNota(e2));

  do {
    e3 = parseFloat(prompt("Ingrese la nota del tercer examen :"));
    if (!validarNota(e3)) {
      alert("Nota inválida");
    }
  } while (!validarNota(e3));

  do {
    e4 = parseFloat(prompt("Ingrese la nota del cuarto examen :"));
    if (!validarNota(e4)) {
      alert("Nota inválida");
    }
  } while (!validarNota(e4));

  promedio = (e1 + e2 + e3 + e4)/4;

  alert("El promedio final de las calificaciones obtenidas es: " + promedio);
}

calculo();

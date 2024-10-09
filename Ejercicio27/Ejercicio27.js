// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos.
//  dicha calificación se compone de los siguientes porcentajes: a. 55% del promedio final
//   de sus calificaciones de los tres (3) parciales. b. 30% de la calificación examen final.
//    c. 15% de la calificación trabajo final.

function calculo() {
  function validarNota(nota) {
    return !isNaN(nota);
  }

  let p1, p2, p3, pExamen, pTrabajo;

  do {
    p1 = parseFloat(prompt("Ingrese la nota del primer parcial :"));
    if(isNaN(p1)){
        alert("Nota inválida");
    }
  } while (!validarNota(p1));

  do {
    p2 = parseFloat(prompt("Ingrese la nota del segundo parcial :"));
    if(isNaN(p2)){
        alert("Nota inválida");
    }
  } while (!validarNota(p2));

  do {
    p3 = parseFloat(prompt("Ingrese la nota del tercer parcial :"));
    if(isNaN(p3)){
        alert("Nota inválida");
    }
  } while (!validarNota(p3));

  do {
    pExamen = parseFloat(prompt("Ingrese la nota del examen final :"));
    if(isNaN(pExamen)){
        alert("Nota inválida");
    }
  } while (!validarNota(pExamen));

  do {
    pTrabajo = parseFloat(prompt("Ingrese la nota del trabajo final :"));
    if(isNaN(pTrabajo)){
        alert("Nota inválida");
    }
  } while (!validarNota(pTrabajo));

  let sumaParciales = p1 + p2 + p3;
  let promedioParciales = sumaParciales / 3;
  let promedioFinal = (promedioParciales * 0.55) + (pExamen * 0.3) + (pTrabajo * 0.15);

  alert(
    "El promedio final de la materia de algoritmos es: " +
      promedioFinal
  );
}

calculo();

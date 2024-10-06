// los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.


function determinarGrupo() {
    
    let nombreAlumno = prompt("Introduzca el nombre del alumno:").trim();
    let sexoAlumno = prompt("Introduce tu sexo (M para masculino, F para femenino):").trim().toUpperCase();
    let primeraLetra = nombreAlumno.charAt(0).toUpperCase();

    if ((sexoAlumno !== 'M' && sexoAlumno !== 'F') || nombreAlumno.length === 0) {
        alert("Datos incorrectos. Asegúrese de ingresar un nombre y sexo válidos.");
        return;
    }

    let grupo;

    if (sexoAlumno === 'F') {
        if (primeraLetra < 'M') {
            grupo = 'A';
        } else {
            grupo = 'B';
        }
    } else if (sexoAlumno === 'M') {
        if (primeraLetra > 'N') {
            grupo = 'A';
        } else {
            grupo = 'B';
        }
    }

    alert(`El alumn@ ${nombreAlumno} pertenece al grupo: ${grupo}`);
}
determinarGrupo();
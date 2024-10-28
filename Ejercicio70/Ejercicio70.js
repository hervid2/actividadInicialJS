// Escribir un programa que almacene la cadena de caracteres contraseña en una variable, 
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

// Almacenar la contraseña en una variable
const contraseñaCorrecta = "contraseña"; // La contraseña correcta

let contraseñaUsuario; // Variable para almacenar la entrada del usuario

// Bucle que pregunta por la contraseña hasta que sea correcta
do {
    contraseñaUsuario = prompt("Ingrese la contraseña:"); // Solicitar la contraseña al usuario
    if (contraseñaUsuario !== contraseñaCorrecta) {
        console.log("Contraseña incorrecta. Inténtelo de nuevo."); // Mensaje si la contraseña es incorrecta
    }
} while (contraseñaUsuario !== contraseñaCorrecta); // Repetir mientras la contraseña no sea correcta

console.log("Contraseña correcta. Acceso concedido."); // Mensaje cuando la contraseña es correcta

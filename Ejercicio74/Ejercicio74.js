// Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el 
// usuario escriba “salir” que terminará. 

// Variable para almacenar la entrada del usuario
let entrada;

// Bucle que continuará hasta que el usuario escriba "salir"
do {
    entrada = prompt("Escribe algo (escribe 'salir' para terminar):"); // Solicitar al usuario que introduzca algo
    if (entrada !== "salir") { // Comprobar que no se haya escrito "salir"
        console.log(entrada); // Mostrar lo que el usuario ha introducido
    }
} while (entrada !== "salir"); // Continuar el bucle mientras la entrada no sea "salir"

console.log("Programa terminado."); // Mensaje al finalizar el programa

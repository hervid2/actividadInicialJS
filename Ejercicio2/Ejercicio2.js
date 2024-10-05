// 2. escribir un programa que almacene la cadena de caracteres contraseña de una variable, 
// pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida 
// por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y 
// minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos. 

const claveGuardada = "Password456";

function validarContraseña(){

const contraseñaIntroducida = prompt("Ingrese la contraseña: ");

if (!/^[a-zA-Z0-9]+$/.test(contraseñaIntroducida)) {
    alert("La contraseña debe ser alfanumérica!");
    return
}

const claveMinuscula = contraseñaIntroducida.toLowerCase();
const contraseñaCorrectaMinuscula = claveGuardada.toLowerCase();

if(claveMinuscula === contraseñaCorrectaMinuscula){
   alert("La contraseña es correcta!");
}else{
    alert("La contraseña es incorrecta!");
}
}
 validarContraseña();


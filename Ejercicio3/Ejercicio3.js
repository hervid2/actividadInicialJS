// Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante
// excepciones y el mensaje debe ser personalizado.

function dividir(){
    try{
        const dividendo = parseFloat (prompt("Ingrese el dividendo: "));
        const divisor = parseFloat (prompt("Ingrese el divisor: "));

        if(isNaN(dividendo) || isNaN(divisor)){
            throw new Error(" Uno de los caracteres ingresados no es un número!");
        } 

        if(divisor === 0){
            throw new Error(" Cero no es un divisor válido!");
        } 

        const cociente = dividendo / divisor;
        alert("El resultado de la división es: "+ cociente);
        
    } catch (error){
        alert(" Error:"+ error.message);
    }
}
dividir();
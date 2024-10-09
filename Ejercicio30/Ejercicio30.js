// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener 
//entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito. 

do{
    let contraseña = prompt("Ingrese una contraseña entre 8 y 12 caracteres,\n con al menos una mayúscula, una minúscula y un dígito:");
    let mayuscula = true;
    let minuscula = true;
    let digito = true;

    if (contraseña.length >= 8 && contraseña.length <= 12) {
        for (let i = 0; i < contraseña.length; i++) {
            if (contraseña[i] >= 'A' && contraseña[i] <= 'Z') {
                mayuscula = true;
            } 
            if(contraseña[i] >= 'a' && contraseña[i] <= 'z'){
                minuscula = true;
            } 
            } if(!isNaN(parseInt(contraseña[i]))){
                digito = true;
            }
        }else{
    alert("La contraseña debe tener entre 8 y 12 caracteres,\n contener al menos una mayúscula, una minúscula \n y un número!");
}

}while(!((mayuscula = true) && (minuscula = true) && (digito = true)));

alert(`La contraseña ha sido establecida exitosamente!`);

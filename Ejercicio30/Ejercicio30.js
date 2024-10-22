// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener 
//entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito. 

function validarContraseña(contraseña) {
    let mayuscula = false;
    let minuscula = false;
    let digito = false;

    if (contraseña.length >= 8 && contraseña.length <= 12) {
        for (let i = 0; i < contraseña.length; i++) {
            const char = contraseña[i];
            if (char >= 'A' && char <= 'Z') {
                mayuscula = true;
            }
            if (char >= 'a' && char <= 'z') {
                minuscula = true;
            }
            if (char >= '0' && char <= '9') {
                digito = true;
            }
        }
        return mayuscula && minuscula && digito;
    }
    return false;
}

let contraseña;
while (true) {
    contraseña = prompt("Ingrese una contraseña entre 8 y 12 caracteres,\n con al menos una mayúscula, una minúscula y un dígito:");

    if (validarContraseña(contraseña)) {
        alert("La contraseña ha sido establecida exitosamente!");
        break;
    } else {
        alert("La contraseña debe tener entre 8 y 12 caracteres,\n y contener al menos una mayúscula, una minúscula y un número.");
    }
}
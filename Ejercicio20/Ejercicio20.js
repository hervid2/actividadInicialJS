// Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado:
//a * x2 + b + x + c, siendo X un valor constante. 

let a = parseFloat(prompt("Ingrese A"));
let b = parseFloat(prompt("Ingrese B"));
let c = parseFloat(prompt("Ingrese C"));

function calculo (a, b, c){
    let discriminante = Math.pow(b, 2) - 4 * a * c ;

    if(discriminante > 0){
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        alert(`Solución 1: ${x1}`);
        alert(`Solución 2: ${x2}`);
    } else if(discriminante==0){
        let x = -b / (2 * a);
        alert(`Solución: ${x}`);
        } else {
            alert(`No hay solución, el discriminante es negativo ${discriminante}`);
    }
}

calculo(a, b, c);
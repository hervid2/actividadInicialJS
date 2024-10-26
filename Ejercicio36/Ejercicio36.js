// En el programa de cocina de “Doña Anita” han dado la receta para la preparación 
// de bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir
//10 gramos de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. 
//  ¿La cantidad de gramos de harina para hacer el bizcocho es? 

function reglaDeTresSimple(a, b, c) {
    return (b * c) / a;
}

let a = 10;  // 10 gramos de chocolate
let b = 100; // 100 gramos de harina
let c = 20;  // 20 gramos de cacao

let x = reglaDeTresSimple(a, b, c);
console.log(`Con ${c} gramos de cacao se requiere ${x} de harina.`);
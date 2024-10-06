// La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.

function pedirPizza() {
   
    const basePizza = ["mozzarella", "tomate"];
    const ingredientesVegetarianos = ["pimiento", "tofu"];
    const ingredientesNoVegetarianos = ["pepperoni", "jamon", "salmon"];

    const pizzaVegetariana = prompt("Bienvenido a nuestra pizzería!\n ¿Desea una pizza vegetariana?\n escriba: 'si' o 'no': ").toLowerCase();

    let ingredienteElegido;
    let tipoPizza;

    if (pizzaVegetariana === "sí" || pizzaVegetariana === "si") {
        tipoPizza = "vegetariana";
        ingredienteElegido = prompt(`Por favor seleccione un ingrediente adicional (${ingredientesVegetarianos}):`).toLowerCase();
        
        if (!ingredientesVegetarianos.includes(ingredienteElegido)) {
            alert("Ingrediente no válido. Escriba el nombre del ingrediente exacto que desea en su pizza!");
            return; 
        }

    } else if (pizzaVegetariana === "no") {
        tipoPizza = "no vegetariana";
        ingredienteElegido = prompt(`Por favor seleccione un ingrediente adicional (${ingredientesNoVegetarianos}):`).toLowerCase();
        
        if (!ingredientesNoVegetarianos.includes(ingredienteElegido)) {
            alert("Ingrediente no válido. Escriba el nombre del ingrediente exacto que desea en su pizza!");
            return;
        }

    } else {
        alert("Opción no válida. Por favor  escriba: 'si' o 'no'.");
        return; 
    }

    alert(`Su pizza elegida es ${tipoPizza} con ${basePizza} y ${ingredienteElegido}.`);
}

pedirPizza();
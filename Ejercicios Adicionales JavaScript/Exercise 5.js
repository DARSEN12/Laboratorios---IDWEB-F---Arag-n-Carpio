// Pedimos al usuario que ingrese un número
const number = parseFloat(prompt("Ingresa un número aleatorio"));

// Mostramos el número ingresado
console.log("El número ingresado es: " , number);

// Usamos un bucle 'for' para contar del 1 al number
for (let i = 1; i <= number; i++) {
    console.log(i);
}
// Pedimos al usuario que ingrese un número
const number = parseFloat(prompt("Ingresa un número aleatorio"));

// Mostramos el número ingresado
console.log("El número ingresado es: " , number);

// Determinamos si el número es par o impar 
if (number % 2 == 0) {
    console.log("This number is pair");
} else {
    console.log("This number is odd");
}
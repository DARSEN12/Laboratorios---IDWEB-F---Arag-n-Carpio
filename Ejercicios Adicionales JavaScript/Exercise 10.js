// Pedimos al usuario que ingrese un número
const number = parseInt(prompt("Ingresa un número para calcular su factorial:"));

// Mostramos el número ingresado
console.log("El número ingresado es: " , number);

// Variable para almacenar el resultado
let factorial = 1;

// Calculamos el factorial
for (let i = 1; i <= number; i++) {
    factorial *= i;
}

// Mostramos el resultado
console.log(factorial);

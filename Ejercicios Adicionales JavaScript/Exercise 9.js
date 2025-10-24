// Pedimos al usuario que ingrese un número
const number = parseFloat(prompt("Ingresa un número aleatorio"));

// Mostramos el número ingresado
console.log("El número ingresado es: " , number);

// Contador de divisores
let counter_dividers = 0;

// Usamos un bucle 'for' para determinar si es primos o no
for (let i = 1; i <= number; i++) {
    if (number % i == 0) counter_dividers++;
    if (counter_dividers >= 3) break;
}

if (counter_dividers == 2) {
    console.log("El número es primo");
} else {
    console.log("El número no es primo");
}
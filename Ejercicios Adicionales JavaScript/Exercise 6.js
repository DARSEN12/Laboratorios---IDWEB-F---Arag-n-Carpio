// Pedimos al usuario que ingrese un número
const number = parseFloat(prompt("Ingresa un número aleatorio"));

// Mostramos el número ingresado
console.log("El número ingresado es: " , number);

// Usamos un bucle 'for' para la tabla de multiplicar
for (let i = 1; i <= 20; i++) {
    console.log(i , " * " , number , " = " , i * number);
}
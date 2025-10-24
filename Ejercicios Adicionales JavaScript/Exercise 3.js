// Pedimos al usuario que ingrese los números
const number1 = parseFloat(prompt("Ingresa un primer número"));
const number2 = parseFloat(prompt("Ingresa un segundo número"));
const number3 = parseFloat(prompt("Ingresa un tercer número"));

// Mostramos los números ingresados
console.log("Los números ingresados son: ", number1, ", ", number2, " y ", number3);

// Comparamos números
let number_enderly = number1; 
if (number_enderly < number2) number_enderly = number2;
if (number_enderly < number3) number_enderly = number3;

// Mostramos el resultado
console.log("El número mayor es: ", number_enderly);

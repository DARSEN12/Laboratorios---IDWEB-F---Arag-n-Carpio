// Pedimos al usuario que ingrese los números
const number1 = parseFloat(prompt("Ingresa un primer número"));
const number2 = parseFloat(prompt("Ingresa un segundo número"));
const number3 = parseFloat(prompt("Ingresa un tercer número"));

// Mostramos los números ingresados
console.log("Los números ingresados son: ", number1, ", ", number2, " y ", number3);

// Contador números positivos
let counter_positives = 0;

// Calculamos cantidad de números positivos
if (number1 > 0) counter_positives++;
if (number2 > 0) counter_positives++;
if (number3 > 0) counter_positives++;

// Mostramos resultados
console.log("Cantidad de positivos: " , counter_positives);
console.log("Cantidad de negativos: " , 3 - counter_positives);
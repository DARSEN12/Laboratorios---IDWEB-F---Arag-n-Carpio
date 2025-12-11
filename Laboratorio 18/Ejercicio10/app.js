// app.js
// Laboratorio 18 - Ejercicio 9

import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(10, 4));
console.log("Multiplicación:", multiplicar(6, 7));

try {
  console.log("División:", dividir(20, 0));
} catch (error) {
  console.error("Error en división:", error.message);
}
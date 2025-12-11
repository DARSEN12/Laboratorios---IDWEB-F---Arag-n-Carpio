// multiplicacionDivision.js
// Laboratorio 18 - Ejercicio 9

export default function multiplicar(a, b) {
    return a * b;
  }
  
  export function dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir entre cero");
    }
    return a / b;
  }
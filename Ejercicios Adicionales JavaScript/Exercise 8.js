// Generar un número aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Pedir al usuario que adivine el número
let intento = parseInt(prompt("Adivina el número entre 1 y 10:"));

// Contar los intentos hasta que el usuario adivine el número
while (intento !== numeroAleatorio) {
  if (intento < numeroAleatorio) {
    intento = parseInt(prompt("Demasiado bajo. Adivina nuevamente:"));
  } else if (intento > numeroAleatorio) {
    intento = parseInt(prompt("Demasiado alto. Adivina nuevamente:"));
  }
}

// Si el usuario adivina el número, mostrar un mensaje
console.log("¡Felicidades! Adivinaste el número:", numeroAleatorio);
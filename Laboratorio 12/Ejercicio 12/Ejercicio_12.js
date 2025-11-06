// Función flecha: compone dos transformaciones de texto
const componerTransformaciones = (f1, f2) => (texto) => f2(f1(String(texto)));

// Transformaciones básicas
const mayusculas = (t) => String(t).toUpperCase();
const agregarSigno = (t) => String(t) + '!';

// Compuesta solicitada
const transformar = componerTransformaciones(mayusculas, agregarSigno);

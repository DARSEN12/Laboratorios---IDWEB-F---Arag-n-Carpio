function crearSecuencia(inicio, paso) {
  let actual = Number(inicio);
  const inc = Number(paso);
  if (!Number.isFinite(actual) || !Number.isFinite(inc)) {
    throw new TypeError('inicio y paso deben ser números finitos');
  }

  // Truco: arrancamos en (inicio - paso) y sumamos inc en cada llamada.
  let estado = actual - inc;

  // Closure que avanza la secuencia aritmética
  return function () {
    estado += inc;
    return estado;
  };
}

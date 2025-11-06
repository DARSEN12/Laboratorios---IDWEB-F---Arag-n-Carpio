function crearContador(valorInicial = 0) {
  let valor = Number(valorInicial);
  const inicio = valor;

  // Incrementa en 1 y devuelve el nuevo valor
  const incrementar = () => ++valor;

  // Resetea al valor inicial y lo devuelve
  const resetear = () => {
    valor = inicio;
    return valor;
  };

  // Solo expone las funciones; el estado queda encapsulado
  return { incrementar, resetear };
}

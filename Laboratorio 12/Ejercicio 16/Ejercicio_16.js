function acumulador(valorInicial = 0) {
  let total = Number(valorInicial);
  if (Number.isNaN(total)) total = 0;

  // Closure que suma y retorna el nuevo total
  return function (valor) {
    const n = Number(valor);
    if (Number.isNaN(n)) throw new Error('Valor a sumar inválido');
    total += n;
    return total;
  };
}

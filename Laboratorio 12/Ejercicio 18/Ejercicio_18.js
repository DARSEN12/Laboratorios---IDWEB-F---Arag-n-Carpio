function media(...numeros) {
  if (numeros.length === 0) return NaN;           // sin datos
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return suma / numeros.length;
}

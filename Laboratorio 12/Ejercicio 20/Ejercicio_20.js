function ejecutarOperacion(fn, x, y) {
  if (typeof fn !== 'function') throw new TypeError('fn debe ser una función');
  if (!Number.isFinite(x) || !Number.isFinite(y)) throw new TypeError('x e y deben ser números finitos');
  return fn(x, y);
}

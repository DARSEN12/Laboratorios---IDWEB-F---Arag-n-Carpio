function filtrarArreglo(arr, callback) {
  if (!Array.isArray(arr)) throw new TypeError('arr debe ser un arreglo');
  if (typeof callback !== 'function') throw new TypeError('callback debe ser una función');
  return arr.filter((elem, idx, a) => callback(elem, idx, a));
}

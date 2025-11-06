// Función expresada: retorna el precio final tras aplicar el descuento
const calcularDescuento = function (precio, porcentaje) {
  return precio * (1 - (porcentaje / 100));
};

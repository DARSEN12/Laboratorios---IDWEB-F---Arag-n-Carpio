// Solo funciones flecha + closures
const operacionesMatematicas = () => {
  const sumar = (a, b) => a + b;
  const restar = (a, b) => a - b;
  const multiplicar = (a, b) => a * b;
  const dividir = (a, b) => {
    if (b === 0) throw new Error('Error: división por cero');
    return a / b;
  };

  // Las funciones quedan cerradas en el scope (closure)
  return { sumar, restar, multiplicar, dividir };
};

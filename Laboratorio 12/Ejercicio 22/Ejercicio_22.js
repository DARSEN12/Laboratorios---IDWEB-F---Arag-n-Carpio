function descargarArchivo(url, callback) {
  // Validación mínima
  if (typeof url !== 'string' || url.trim() === '') {
    throw new TypeError('URL inválida');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('callback debe ser una función');
  }

  const mensajeDescargando = `Descargando... (${url})`;

  // Simulación asíncrona: después de 1.5s "termina"
  setTimeout(() => {
    const mensajeFinal = `Descarga completa de ${url}`;
    callback(mensajeFinal);
  }, 1500);

  // Retorna el estado inmediato
  return mensajeDescargando;
}

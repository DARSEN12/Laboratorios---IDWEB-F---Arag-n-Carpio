function procesarTexto(texto) {
  // Función interna: normaliza espacios (trim + colapsar múltiples a uno)
  function limpiarEspacios(t) {
    return String(t).trim().replace(/\s+/g, ' ');
  }

  // Función interna: cuenta palabras separadas por espacio simple
  function contarPalabras(t) {
    if (!t) return 0;
    // Si t es cadena vacía tras limpiar, 0; si no, split por espacio
    return t.split(' ').filter(Boolean).length;
  }

  const limpio = limpiarEspacios(texto);
  const totalPalabras = contarPalabras(limpio);

  return { limpio, totalPalabras };
}

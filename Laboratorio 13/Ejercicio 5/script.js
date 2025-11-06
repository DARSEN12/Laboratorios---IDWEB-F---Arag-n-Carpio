// --- LÓGICA ---
function reordenarPalabras(oracion) {
    if (typeof oracion !== 'string') throw new TypeError('oracion debe ser una cadena');
    // split por espacios (colapsa múltiples), toUpperCase y ordena con locale ES
    const palabras = oracion.trim()
      .split(/\s+/)
      .filter(Boolean)
      .map(w => w.toUpperCase());
  
    return palabras.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
  }
  
  // --- UI DEMO ---
  (() => {
    const casos = [
      "sol luna estrella planeta",
      "  árbol  casa  avión ",
      "ñandú niño nido",
      ""
    ];
    const ul = document.getElementById('ejemplos');
    casos.forEach(t => {
      const li = document.createElement('li');
      li.textContent = `reordenarPalabras("${t}") = [${reordenarPalabras(t).join(', ')}]`;
      ul.appendChild(li);
    });
  })();
  
  // Probador manual
  document.getElementById('probar').addEventListener('click', () => {
    const raw = document.getElementById('txt').value;
    const res = reordenarPalabras(raw);
    document.getElementById('out').textContent = JSON.stringify(res);
  });
  
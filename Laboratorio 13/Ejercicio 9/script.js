// --- LÓGICA ---
/**
 * Cuenta cuántas veces aparece cada palabra en 'texto'.
 * - Insensible a mayúsculas (case-insensitive).
 * - Tokeniza por secuencias de letras Unicode (\p{L}+), ignora puntuación/números.
 * @returns {Map<string, number>}
 */
function contarPalabras(texto) {
    if (typeof texto !== 'string') throw new TypeError('texto debe ser una cadena');
  
    const tokens = texto.match(/\p{L}+/gu) || []; // solo palabras
    const map = new Map();
  
    for (const raw of tokens) {
      const w = raw.toLowerCase(); // insensible a mayúsculas
      map.set(w, (map.get(w) || 0) + 1);
    }
    return map;
  }
  
  // Helper para mostrar un Map de forma legible
  function mapToString(m) {
    return `{ ${[...m.entries()].map(([k, v]) => `"${k}" => ${v}`).join(', ')} }`;
  }
  
  // --- UI DEMO ---
  // Ejemplos fijos
  (() => {
    const casos = [
      'sol luna sol sol estrella luna',
      '¡Hola, hola! ¿Qué tal, HOla?',
      'árbol árbol ÁRBOL; casa, CASA.',
      ''
    ];
    const ul = document.getElementById('ejemplos');
  
    casos.forEach(t => {
      const m = contarPalabras(t);
      const li = document.createElement('li');
      li.textContent = `contarPalabras("${t}") → Map ${mapToString(m)}`;
      ul.appendChild(li);
    });
  })();
  
  // Probador manual
  document.getElementById('probar').addEventListener('click', () => {
    const raw = document.getElementById('txt').value;
    const m = contarPalabras(raw);
    document.getElementById('out').textContent = `Map ${mapToString(m)}`;
  });
  
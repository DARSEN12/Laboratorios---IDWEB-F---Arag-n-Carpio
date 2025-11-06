// --- LÓGICA ---
/**
 * Cuenta cuántas veces aparece cada letra en 'texto'.
 * - Insensible a mayúsculas (convierte a minúsculas).
 * - Considera solo letras Unicode (\p{L}); ignora dígitos, espacios y signos.
 * @returns {Record<string, number>}
 */
function contarLetras(texto) {
    if (typeof texto !== 'string') throw new TypeError('texto debe ser una cadena');
  
    const res = {};
    const lower = texto.toLowerCase();
  
    for (const ch of lower) {
      if (/\p{L}/u.test(ch)) {
        res[ch] = (res[ch] || 0) + 1;
      }
    }
    return res;
  }
  
  // --- UI DEMO ---
  (() => {
    const casos = [
      "banana",                    // { b:1, a:3, n:2 }
      "Hola Mundo!!!",             // { h:1, o:2, l:1, a:1, m:1, u:1, n:1, d:1 }
      "Árbol, niño.",              // { á:1, r:1, b:1, o:2, l:1, n:1, i:1, ñ:1 }
      ""                           // {}
    ];
    const ul = document.getElementById('ejemplos');
    casos.forEach(t => {
      const li = document.createElement('li');
      li.textContent = `contarLetras("${t}") → ${JSON.stringify(contarLetras(t))}`;
      ul.appendChild(li);
    });
  })();
  
  // Probador manual
  document.getElementById('probar').addEventListener('click', () => {
    const raw = document.getElementById('txt').value;
    const out = document.getElementById('out');
    try {
      out.textContent = JSON.stringify(contarLetras(raw), null, 2);
    } catch (e) {
      out.textContent = `Error: ${e.message}`;
    }
  });
  
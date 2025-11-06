// --- LÓGICA ---
// Normaliza cada nombre (trim); opcionalmente puedes forzar mayúsculas/minúsculas
function crearSetNombres(nombres) {
    if (!Array.isArray(nombres)) throw new TypeError('nombres debe ser un arreglo');
    const normalizados = nombres
      .map(n => String(n).trim())
      .filter(Boolean);
    return new Set(normalizados); // elimina duplicados automáticamente
  }
  
  // --- UI DEMO ---
  (() => {
    const casos = [
      ['Ana', 'Luis', 'Ana', 'Pedro'],
      ['maria', 'María', 'MARIA'],       // ojo: tildes cuentan distinto
      ['  Juan  ', 'Juan', '  Juan'],    // espacios se normalizan
    ];
    const ul = document.getElementById('ejemplos');
    casos.forEach(arr => {
      const s = crearSetNombres(arr);
      const li = document.createElement('li');
      li.textContent = `Input: [${arr.join(', ')}]  →  Set: {${[...s].join(', ')}}  / Array único: [${[...s].join(', ')}]`;
      ul.appendChild(li);
    });
  })();
  
  // Probador manual
  document.getElementById('probar').addEventListener('click', () => {
    const raw = document.getElementById('lista').value.trim();
    const out = document.getElementById('out');
  
    if (raw === '') {
      out.textContent = 'Set vacío {}';
      return;
    }
  
    const arr = raw.split(',').map(s => s.trim()).filter(Boolean);
    const set = crearSetNombres(arr);
  
    // Mostramos ambas vistas: como Set y como arreglo único
    const unicos = [...set];
    out.textContent =
      `Set (únicos): { ${unicos.join(', ')} }\n` +
      `Como arreglo: [ ${unicos.join(', ')} ]\n` +
      `Tamaño: ${set.size}`;
  });
  
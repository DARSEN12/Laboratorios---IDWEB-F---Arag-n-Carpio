// --- LÓGICA ---
function tieneDuplicados(arr) {
    if (!Array.isArray(arr)) throw new TypeError('arr debe ser un arreglo');
    // Un Set descarta duplicados; si su tamaño es menor, había repetidos.
    return new Set(arr).size !== arr.length;
  }
  
  // --- UI DEMO ---
  // Ejemplos fijos
  (() => {
    const casos = [
      ['a', 'b', 'c'],          // false
      ['a', 'b', 'a'],          // true
      [1, 2, 3, 2],             // true
      [10, 20, 30],             // false
      ['x', 'X']                // false (sensibles a mayúsc/minúsc)
    ];
    const ul = document.getElementById('ejemplos');
    casos.forEach(arr => {
      const li = document.createElement('li');
      li.textContent = `tieneDuplicados([${arr}]) = ${tieneDuplicados(arr)}`;
      ul.appendChild(li);
    });
  })();
  
  // Probador manual (entrada coma-separada)
  document.getElementById('probar').addEventListener('click', () => {
    const raw = document.getElementById('lista').value.trim();
    const out = document.getElementById('out');
  
    if (raw === '') { out.textContent = 'false'; return; }
  
    // Parse simple: separa por comas y recorta espacios.
    // Nota: aquí tratamos 'a' y ' a ' como el mismo valor por el trim.
    const arr = raw.split(',').map(s => s.trim());
  
    out.textContent = String(tieneDuplicados(arr));
  });
  
  /*
  Si necesitas insensibilidad a mayúsculas/minúsculas:
  const arr = raw.split(',').map(s => s.trim().toLowerCase());
  */
  
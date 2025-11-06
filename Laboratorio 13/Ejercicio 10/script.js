// --- LÓGICA ---
function invertirMap(map) {
    if (!(map instanceof Map)) throw new TypeError('Argumento debe ser un Map');
  
    const invertido = new Map();
    for (const [k, v] of map) {
      // Si hay valores repetidos en el original, el último gana.
      invertido.set(v, k);
    }
    return invertido;
  }
  
  // (Opcional) Variante para agrupar colisiones por valor:
  // function invertirMapAgrupando(map) {
  //   if (!(map instanceof Map)) throw new TypeError('Argumento debe ser un Map');
  //   const inv = new Map();
  //   for (const [k, v] of map) {
  //     const arr = inv.get(v);
  //     if (arr) arr.push(k); else inv.set(v, [k]);
  //   }
  //   return inv;
  // }
  
  // Helper: stringify Map
  const mapToString = (m) => `{ ${[...m.entries()].map(([k, v]) => `"${k}" => "${v}"`).join(', ')} }`;
  
  // --- UI DEMO ---
  (() => {
    const capitales = new Map([
      ['Perú',  'Lima'],
      ['Chile', 'Santiago'],
    ]);
    const invertido = invertirMap(capitales);
  
    const ul = document.getElementById('ejemplos');
    const li1 = document.createElement('li');
    li1.textContent = `Entrada: Map ${mapToString(capitales)}`;
    const li2 = document.createElement('li');
    li2.textContent = `invertirMap(entrada) → Map ${mapToString(invertido)}`;
    ul.appendChild(li1);
    ul.appendChild(li2);
  })();
  
  // Probador manual
  document.getElementById('probar').addEventListener('click', () => {
    const raw = document.getElementById('pares').value.trim();
    const out = document.getElementById('out');
  
    if (raw === '') { out.textContent = 'Map {}'; return; }
  
    // Parse: "a:b, c:d" -> Map([['a','b'], ['c','d']])
    try {
      const entries = raw.split(',').map(s => s.trim()).filter(Boolean).map(pair => {
        const [k, v] = pair.split(':').map(x => (x ?? '').trim());
        if (!k || !v) throw new Error(`Par inválido: "${pair}" (usa clave:valor)`);
        return [k, v];
      });
  
      const m = new Map(entries);
      const inv = invertirMap(m);
      out.textContent = `Entrada:  Map ${mapToString(m)}\nInvertido: Map ${mapToString(inv)}`;
    } catch (e) {
      out.textContent = `Error: ${e.message}`;
    }
  });
  
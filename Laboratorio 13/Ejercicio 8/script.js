// --- CATÁLOGO (Map producto → precio) ---
const catalogo = new Map([
    ['manzana', 1.20],
    ['banana',  1.00],
    ['pan',     2.50],
    ['leche',   3.40],
    ['huevo',   0.60],
    ['arroz',   2.80],
    ['aceite',  6.90],
  ]);
  
  // --- LÓGICA ---
  /**
   * Suma el precio de cada producto en 'lista'.
   * - 'lista' es un arreglo de nombres de producto.
   * - Productos no encontrados se reportan y no suman.
   * @returns {{ total:number, faltantes:string[] }}
   */
  function calcularTotal(catalogo, lista) {
    if (!(catalogo instanceof Map)) throw new TypeError('catalogo debe ser un Map');
    if (!Array.isArray(lista)) throw new TypeError('lista debe ser un arreglo');
  
    let total = 0;
    const faltantes = [];
  
    for (const raw of lista) {
      const nombre = String(raw).trim().toLowerCase();
      if (!nombre) continue;
      if (catalogo.has(nombre)) {
        total += catalogo.get(nombre);
      } else {
        faltantes.push(nombre);
      }
    }
    return { total, faltantes };
  }
  
  // --- UI: pintar catálogo ---
  (() => {
    const lines = [];
    catalogo.forEach((precio, prod) => {
      lines.push(`${prod.padEnd(10, ' ')} : S/ ${precio.toFixed(2)}`);
    });
    document.getElementById('catalogo').textContent = lines.join('\n');
  })();
  
  // --- UI: ejemplos ---
  (() => {
    const casos = [
      ['manzana', 'pan', 'leche'],
      ['banana', 'banana', 'huevo'],           // duplicados suman dos veces
      ['arroz', 'aceite', 'galleta'],          // 'galleta' no existe
    ];
    const ul = document.getElementById('ejemplos');
    casos.forEach(arr => {
      const { total, faltantes } = calcularTotal(catalogo, arr);
      const li = document.createElement('li');
      li.textContent =
        `[${arr.join(', ')}]  ->  Total: S/ ${total.toFixed(2)}` +
        (faltantes.length ? `  | Faltantes: ${faltantes.join(', ')}` : '');
      ul.appendChild(li);
    });
  })();
  
  // --- UI: probador manual ---
  document.getElementById('probar').addEventListener('click', () => {
    const raw = document.getElementById('lista').value.trim();
    const out = document.getElementById('out');
  
    if (raw === '') { out.textContent = 'Total: S/ 0.00'; return; }
  
    const lista = raw.split(',').map(s => s.trim()).filter(Boolean);
    const { total, faltantes } = calcularTotal(catalogo, lista);
  
    out.textContent =
      `Entrada: [${lista.join(', ')}]\n` +
      `Total:   S/ ${total.toFixed(2)}\n` +
      (faltantes.length ? `No encontrados: ${faltantes.join(', ')}` : 'Todos encontrados');
  });
  
// --- LÓGICA ---
/**
 * Combina dos catálogos (objetos: producto -> precio).
 * - Si un producto existe en ambos, mantiene el precio más bajo.
 * - Todos los precios finales se redondean a 2 decimales (número).
 * @param {Record<string, number>} tiendaA
 * @param {Record<string, number>} tiendaB
 * @returns {Record<string, number>}
 */
function combinarCatalogos(tiendaA, tiendaB) {
    if (!esObjetoPlano(tiendaA) || !esObjetoPlano(tiendaB)) {
      throw new TypeError('Ambos parámetros deben ser objetos planos { producto: precio }');
    }
  
    const round2 = (x) => Math.round((Number(x) + Number.EPSILON) * 100) / 100;
    const resultado = {};
  
    // Unir claves de ambos catálogos
    const claves = new Set([...Object.keys(tiendaA), ...Object.keys(tiendaB)]);
  
    for (const k of claves) {
      const a = tiendaA.hasOwnProperty(k) ? validarNumero(tiendaA[k], `tiendaA["${k}"]`) : Infinity;
      const b = tiendaB.hasOwnProperty(k) ? validarNumero(tiendaB[k], `tiendaB["${k}"]`) : Infinity;
      const menor = Math.min(a, b);
      // Si ambos eran Infinity, no debería pasar (porque k proviene de alguna tienda)
      resultado[k] = round2(menor);
    }
    return resultado;
  }
  
  function esObjetoPlano(o) {
    return typeof o === 'object' && o !== null && Object.getPrototypeOf(o) === Object.prototype;
  }
  
  function validarNumero(v, etiqueta) {
    const n = Number(v);
    if (!Number.isFinite(n)) {
      throw new TypeError(`Valor no numérico/finito en ${etiqueta}`);
    }
    return n;
  }
  
  // --- UI DEMO: ejemplo del enunciado ---
  (() => {
    const tiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
    const tiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };
  
    const combinado = combinarCatalogos(tiendaA, tiendaB);
    /*
      Esperado:
      {
        laptop: 3500.50,
        mouse: 95.20,         // menor que 100.35
        teclado: 250.90,      // menor que 260.10
        monitor: 720.46       // 720.457 -> 720.46
      }
    */
    const ej = document.getElementById('ejemplos');
    ej.textContent =
      'TiendaA: ' + JSON.stringify(tiendaA, null, 2) + '\n' +
      'TiendaB: ' + JSON.stringify(tiendaB, null, 2) + '\n' +
      'Combinado: ' + JSON.stringify(combinado, null, 2);
  })();
  
  // --- UI: probador manual ---
  document.getElementById('probar').addEventListener('click', () => {
    const out = document.getElementById('out');
    try {
      const a = parsePares(document.getElementById('a').value);
      const b = parsePares(document.getElementById('b').value);
      const r = combinarCatalogos(a, b);
      out.textContent = JSON.stringify(r, null, 2);
    } catch (e) {
      out.textContent = `Error: ${e.message}`;
    }
  });
  
  /**
   * Parser simple para texto tipo: "laptop: 3500.5, mouse: 100.35"
   * Devuelve objeto { laptop: 3500.5, mouse: 100.35 }
   */
  function parsePares(s) {
    const obj = {};
    const partes = s.split(',').map(x => x.trim()).filter(Boolean);
    for (const par of partes) {
      const [kRaw, vRaw] = par.split(':');
      if (!kRaw || !vRaw) throw new Error(`Par inválido: "${par}" (usa "clave: valor")`);
      const k = kRaw.trim();
      const v = Number(vRaw.trim());
      if (!k) throw new Error('Clave vacía no permitida');
      if (!Number.isFinite(v)) throw new Error(`Precio no numérico para "${k}"`);
      obj[k] = v;
    }
    return obj;
  }
  
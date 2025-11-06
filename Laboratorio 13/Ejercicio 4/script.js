// --- LÓGICA ---
function filtrarYTransformar(arr) {
    if (!Array.isArray(arr)) throw new TypeError('arr debe ser un arreglo');
  
    // One-pass eficiente: filtra (n>=0), transforma (n^2) y acumula (suma)
    return arr.reduce((acc, n) => {
      const x = Number(n);
      if (!Number.isFinite(x)) throw new TypeError('Todos los elementos deben ser numéricos y finitos');
      return x >= 0 ? acc + x * x : acc;
    }, 0);
  }
  
  // --- UI DEMO ---
  // Ejemplos fijos
  (() => {
    const casos = [
      [-2, -1, 0, 1, 2, 3],  // 0^2 + 1^2 + 2^2 + 3^2 = 14
      [5, 5],                // 25 + 25 = 50
      [-10, -3],             // sin positivos: 0
      [2.5, 1.5, -0.1, 0.1], // 2.5^2 + 1.5^2 + 0.1^2 = 6. + 2.25 + 0.01 = 8.26
    ];
    const ul = document.getElementById('ejemplos');
    casos.forEach(arr => {
      const li = document.createElement('li');
      li.textContent = `filtrarYTransformar([${arr}]) = ${filtrarYTransformar(arr)}`;
      ul.appendChild(li);
    });
  })();
  
  // Probador manual
  document.getElementById('probar').addEventListener('click', () => {
    const raw = document.getElementById('lista').value.trim();
    const out = document.getElementById('out');
  
    if (raw === '') { out.textContent = '0'; return; }
  
    const parts = raw.split(',').map(s => s.trim()).filter(Boolean);
    const nums = parts.map(Number);
  
    if (nums.some(Number.isNaN)) {
      out.textContent = 'Ingresa solo números separados por comas.';
      return;
    }
  
    out.textContent = String(filtrarYTransformar(nums));
  });
  
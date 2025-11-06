// --- LÓGICA ---
function doblarNumeros(arr) {
    if (!Array.isArray(arr)) throw new TypeError('arr debe ser un arreglo');
    return arr.map(n => {
      const x = Number(n);
      if (!Number.isFinite(x)) throw new TypeError('Todos los elementos deben ser numéricos/finítos');
      return x * 2;
    });
  }
  
  // --- UI DEMO ---
  // Ejemplos fijos
  (() => {
    const casos = [
      [1, 2, 3],
      [0, -1, 5.5],
      [10],
      []
    ];
    const ul = document.getElementById('ejemplos');
    casos.forEach(arr => {
      const li = document.createElement('li');
      li.textContent = `doblarNumeros([${arr}]) = [${doblarNumeros(arr)}]`;
      ul.appendChild(li);
    });
  })();
  
  // Probador manual
  document.getElementById('probar').addEventListener('click', () => {
    const raw = document.getElementById('lista').value.trim();
    const out = document.getElementById('out');
  
    if (raw === '') { out.textContent = '[]'; return; }
  
    const parts = raw.split(',').map(s => s.trim()).filter(Boolean);
    const nums = parts.map(Number);
  
    if (nums.some(Number.isNaN)) {
      out.textContent = 'Ingresa solo números separados por comas.';
      return;
    }
  
    out.textContent = `[${doblarNumeros(nums).join(', ')}]`;
  });
  
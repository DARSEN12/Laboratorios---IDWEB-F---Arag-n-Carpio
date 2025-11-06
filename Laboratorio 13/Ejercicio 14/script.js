// --- LÓGICA ---
/**
 * @param {Array<{id:number, nombre:string, area:string, salario:number}>} empleados
 * @returns {Record<string, { empleados: string[], promedio: number }>}
 */
function gestionarEmpleados(empleados) {
    if (!Array.isArray(empleados)) {
      throw new TypeError('empleados debe ser un array de objetos');
    }
  
    // Map<area, {nombres: string[], suma: number, cuenta: number}>
    const grupos = new Map();
  
    for (const e of empleados) {
      if (!esObjetoPlano(e)) throw new TypeError('cada elemento debe ser un objeto plano');
      const { id, nombre, area, salario } = e;
  
      if (typeof nombre !== 'string' || !nombre.trim()) {
        throw new TypeError(`Empleado ${id ?? '?'}: "nombre" inválido`);
      }
      if (typeof area !== 'string' || !area.trim()) {
        throw new TypeError(`Empleado ${id ?? '?'}: "area" inválida`);
      }
      if (typeof salario !== 'number' || !Number.isFinite(salario)) {
        throw new TypeError(`Empleado ${id ?? '?'}: "salario" no numérico/finito`);
      }
  
      const key = area.trim();
      if (!grupos.has(key)) {
        grupos.set(key, { nombres: [], suma: 0, cuenta: 0 });
      }
      const g = grupos.get(key);
      g.nombres.push(nombre.trim());
      g.suma += salario;
      g.cuenta += 1;
    }
  
    // Construir objeto final con promedio (2 decimales, numérico)
    const resultado = {};
    for (const [area, { nombres, suma, cuenta }] of grupos.entries()) {
      const promedio = Math.round((suma / cuenta + Number.EPSILON) * 100) / 100;
      resultado[area] = { empleados: nombres, promedio };
    }
    return resultado;
  }
  
  function esObjetoPlano(o) {
    return typeof o === 'object' && o !== null && Object.getPrototypeOf(o) === Object.prototype;
  }
  
  // --- DEMO AUTOMÁTICA (ejemplo del enunciado) ---
  (() => {
    const listaEmpleados = [
      { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
      { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
      { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
      { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
    ];
    const res = gestionarEmpleados(listaEmpleados);
  
    /*
    Salida esperada:
    {
      Ventas: { empleados: [ 'Juan', 'Marta' ], promedio: 2500 },
      TI: { empleados: [ 'Luis' ], promedio: 4000 },
      "Recursos Humanos": { empleados: [ 'Ana' ], promedio: 3000 }
    }
    */
    document.getElementById('ejemplo').textContent =
      'Entrada:\n' + JSON.stringify(listaEmpleados, null, 2) + '\n\n' +
      'Salida:\n' + JSON.stringify(res, null, 2);
  })();
  
  // --- PROBADOR MANUAL ---
  document.getElementById('probar').addEventListener('click', () => {
    const out = document.getElementById('out');
    try {
      const arr = JSON.parse(document.getElementById('input').value);
      const res = gestionarEmpleados(arr);
      out.textContent = JSON.stringify(res, null, 2);
    } catch (e) {
      out.textContent = `Error: ${e.message}`;
    }
  });
  
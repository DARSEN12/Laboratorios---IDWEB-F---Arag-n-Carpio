// --- Objeto requerido (literal) ---
const auto = {
    marca:  'Toyota',
    modelo: 'Corolla',
    año:    2020,
    detalles() {
      return `Auto: ${this.marca} ${this.modelo} (${this.año})`;
    }
  };
  
  // Pintar ejemplo
  document.getElementById('ejemplo').textContent =
    `marca:  ${auto.marca}\nmodelo: ${auto.modelo}\naño:    ${auto.año}\n` +
    `detalles(): ${auto.detalles()}`;
  
  // --- (Para la demo) Factory para crear más autos ---
  function crearAuto(marca, modelo, año) {
    const year = Number(año);
    if (!marca || !modelo || !Number.isInteger(year)) {
      throw new Error('Datos inválidos: marca y modelo no vacíos, año entero.');
    }
    return {
      marca,
      modelo,
      año: year,
      detalles() {
        return `Auto: ${this.marca} ${this.modelo} (${this.año})`;
      }
    };
  }
  
  // UI: crear otro auto y mostrar detalles
  document.getElementById('crear').addEventListener('click', () => {
    const marca  = document.getElementById('marca').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const anio   = document.getElementById('anio').value.trim();
    const out    = document.getElementById('out');
  
    try {
      const a = crearAuto(marca, modelo, anio);
      out.textContent = a.detalles();
    } catch (e) {
      out.textContent = `Error: ${e.message}`;
    }
  });
  
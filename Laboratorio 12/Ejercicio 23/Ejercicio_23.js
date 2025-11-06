function esMultiplo(a, b) {
    // Retorna true si a es múltiplo de b (b ≠ 0)
    return Number.isFinite(a) && Number.isFinite(b) && b !== 0 && a % b === 0;
  }
  function potencia(base, exponente) {
    if (!Number.isInteger(exponente)) {
      throw new TypeError('El exponente debe ser un entero');
    }
  
    // Casos base
    if (exponente === 0) return 1;
    if (exponente < 0) return 1 / potencia(base, -exponente);
    if (exponente === 1) return base;
  
    // Exponenciación por descomposición (recursiva)
    if (exponente % 2 === 0) {
      const mitad = potencia(base, exponente / 2);
      return mitad * mitad;                 // solo multiplicaciones
    } else {
      return base * potencia(base, exponente - 1); // solo multiplicaciones
    }
  }
  
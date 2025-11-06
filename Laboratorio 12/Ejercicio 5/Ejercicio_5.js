function esMultiplo(a, b) {
    // Retorna true si a es múltiplo de b (b ≠ 0)
    return Number.isFinite(a) && Number.isFinite(b) && b !== 0 && a % b === 0;
  }
  
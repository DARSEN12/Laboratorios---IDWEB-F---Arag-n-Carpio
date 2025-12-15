def calcular_salario(salario_base, horas_extras, pago_hora_extra, bono, afp, salud):
    # Salario bruto: todo lo que se gana antes de descuentos
    salario_bruto = salario_base + (horas_extras * pago_hora_extra) + bono

    # Descuentos: AFP y Salud (se calculan sobre el salario base)
    descuento_afp = salario_base * afp / 100
    descuento_salud = salario_base * salud / 100
    descuentos_totales = descuento_afp + descuento_salud

    # Salario neto: bruto - descuentos
    salario_neto = salario_bruto - descuentos_totales

    # Mostrar resultados
    print(f"💰 Salario bruto: {salario_bruto:.2f}")
    print(f"📉 Descuentos totales: {descuentos_totales:.2f}")
    print(f"✅ Salario neto: {salario_neto:.2f}")


# Ejemplo de uso
calcular_salario(
    salario_base=2000,   # sueldo base
    horas_extras=10,     # cantidad de horas extras
    pago_hora_extra=20,  # pago por hora extra
    bono=300,            # bono adicional
    afp=10,              # porcentaje AFP
    salud=7              # porcentaje Salud
)
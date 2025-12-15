def calcular_impuesto(ingreso_mensual):
    # El ingreso anual incluye 12 sueldos + 2 aguinaldos
    ingreso_anual = ingreso_mensual * 14

    # Definimos los tramos y tasas
    tramos = [
        (0, 20000, 0.0),
        (20000, 50000, 0.10),
        (50000, 100000, 0.20),
        (100000, float("inf"), 0.30)
    ]

    impuesto_total = 0
    detalle_tramos = []

    # Calcular impuestos por tramo
    for limite_inferior, limite_superior, tasa in tramos:
        if ingreso_anual > limite_inferior:
            # El monto gravado en este tramo es la diferencia entre el ingreso y el límite inferior,
            # pero no puede exceder el rango del tramo
            monto_tramo = min(ingreso_anual, limite_superior) - limite_inferior
            impuesto_tramo = monto_tramo * tasa
            impuesto_total += impuesto_tramo
            detalle_tramos.append((limite_inferior, limite_superior, tasa, monto_tramo, impuesto_tramo))

    # Calcular tasa efectiva
    tasa_efectiva = (impuesto_total / ingreso_anual) * 100

    # Mostrar resultados
    print(f"\nIngreso mensual: {ingreso_mensual:.2f}")
    print(f"Ingreso anual (14 sueldos): {ingreso_anual:.2f}\n")

    print("📊 Impuesto por tramo:")
    for li, ls, tasa, monto, imp in detalle_tramos:
        if ls == float("inf"):
            rango = f"> {li}"
        else:
            rango = f"{li} - {ls}"
        print(f"Rango {rango} | Tasa: {int(tasa*100)}% | Monto gravado: {monto:.2f} | Impuesto: {imp:.2f}")

    print(f"\n💰 Total de impuestos: {impuesto_total:.2f}")
    print(f"📉 Tasa efectiva real: {tasa_efectiva:.2f}%\n")


# Ejemplo de uso
ingreso_mensual = float(input("Ingresa tu ingreso mensual: "))
calcular_impuesto(ingreso_mensual)
def generar_espiral(N):
    # Crear matriz NxN vacía
    matriz = [[0] * N for _ in range(N)]

    # Definir límites
    izquierda, derecha = 0, N - 1
    arriba, abajo = 0, N - 1
    numero = 1

    # Llenar en espiral
    while izquierda <= derecha and arriba <= abajo:
        # Recorrer de izquierda a derecha
        for j in range(izquierda, derecha + 1):
            matriz[arriba][j] = numero
            numero += 1
        arriba += 1

        # Recorrer de arriba a abajo
        for i in range(arriba, abajo + 1):
            matriz[i][derecha] = numero
            numero += 1
        derecha -= 1

        # Recorrer de derecha a izquierda
        if arriba <= abajo:
            for j in range(derecha, izquierda - 1, -1):
                matriz[abajo][j] = numero
                numero += 1
            abajo -= 1

        # Recorrer de abajo a arriba
        if izquierda <= derecha:
            for i in range(abajo, arriba - 1, -1):
                matriz[i][izquierda] = numero
                numero += 1
            izquierda += 1

    return matriz


def pedir_numero():
    while True:
        try:
            N = int(input("Ingresa un número N (mayor o igual a 3): "))
            if N >= 3:
                return N
            else:
                print("❌ Error: N debe ser mayor o igual a 3.\n")
        except ValueError:
            print("❌ Error: Debes ingresar un número entero válido.\n")


def mostrar_matriz(matriz):
    for fila in matriz:
        print(" ".join(f"{num:3}" for num in fila))


# Programa principal
N = pedir_numero()
matriz = generar_espiral(N)
print(f"\n📊 Matriz {N}x{N} en espiral:\n")
mostrar_matriz(matriz)
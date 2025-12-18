# Laboratorio 21 - Ejercicio 7 (Binario)

def copiar_binario(origen, destino):
    try:
        with open(origen, "rb") as f_origen:
            contenido = f_origen.read()
        with open(destino, "wb") as f_destino:
            f_destino.write(contenido)
        print(f"Archivo binario copiado de {origen} a {destino}")
    except FileNotFoundError:
        print(f"Error: El archivo {origen} no existe.")
    except Exception as e:
        print(f"Error inesperado: {e}")

# Prueba
copiar_binario("foto.jpg", "copia_foto.jpg")
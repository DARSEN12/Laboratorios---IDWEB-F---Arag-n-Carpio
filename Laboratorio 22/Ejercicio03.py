# Laboratorio 22 - Ejercicio 3

import requests

# Realizamos la petición GET
url = "https://httpbin.org/get"
response = requests.get(url)

# Convertimos la respuesta a JSON
data = response.json()

# Mostramos los campos solicitados
print("=== Ejercicio 3 ===")
print("IP del cliente:", data.get("origin"))
print("\nHeaders:")
for k, v in data.get("headers", {}).items():
    print(f"  {k}: {v}")

print("\nArgs (parámetros de consulta):", data.get("args"))
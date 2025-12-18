# Laboratorio 22 - Ejercicio 4

import requests

# URL base con parámetros para limitar la cantidad
url = "https://pokeapi.co/api/v2/pokemon"
params = {"limit": 10}

# Realizamos la petición GET
response = requests.get(url, params=params)

# Convertimos la respuesta a JSON
data = response.json()

# Extraemos y mostramos los nombres
print("=== Ejercicio 4 ===")
print("Primeros 10 Pokémon:")
for pokemon in data.get("results", []):
    print("-", pokemon["name"].capitalize())
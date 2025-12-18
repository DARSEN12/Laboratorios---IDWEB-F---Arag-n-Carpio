# Laboratorio 21 - Ejercicio 8
import json

# Lista de equipos como diccionarios
equipos = [
    {"Nombre": "Real Madrid", "País": "España", "nivelAtaque": 10, "nivelDefensa": 9},
    {"Nombre": "Barcelona", "País": "España", "nivelAtaque": 9, "nivelDefensa": 8},
    {"Nombre": "Melgar", "País": "Perú", "nivelAtaque": 5, "nivelDefensa": 4},
    {"Nombre": "Boca Juniors", "País": "Argentina", "nivelAtaque": 8, "nivelDefensa": 7},
    {"Nombre": "Liverpool", "País": "Inglaterra", "nivelAtaque": 9, "nivelDefensa": 8}
]

# Convertir lista a JSON con indentación
equipos_json = json.dumps(equipos, indent=4, ensure_ascii=False)

# Mostrar en pantalla
print("=== Ejercicio 8 ===")
print(equipos_json)
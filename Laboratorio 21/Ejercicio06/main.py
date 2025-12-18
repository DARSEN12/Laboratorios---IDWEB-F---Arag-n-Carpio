# main.py
from geometria import Rectangulo, Triangulo, Circulo

# Crear objetos de cada figura
figuras = [
    Rectangulo(4, 6),
    Triangulo(5, 4, 5),
    Circulo(3)
]

# Mostrar resultados
print("=== Ejercicio 6 ===")
for f in figuras:
    print(f"{f.__class__.__name__}: Área = {f.area():.2f}, Perímetro = {f.perimetro():.2f}")
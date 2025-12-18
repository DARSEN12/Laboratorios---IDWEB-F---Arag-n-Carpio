# Laboratorio 21 - Ejercicio 3

import math

# Clase base
class Figura:
    def area(self):
        raise NotImplementedError("Debe implementar el método area()")

    def perimetro(self):
        raise NotImplementedError("Debe implementar el método perimetro()")

# Rectángulo
class Rectangulo(Figura):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto

    def area(self):
        return self.ancho * self.alto

    def perimetro(self):
        return 2 * (self.ancho + self.alto)

# Triángulo (equilátero para simplificar)
class Triangulo(Figura):
    def __init__(self, base, altura, lado):
        self.base = base
        self.altura = altura
        self.lado = lado

    def area(self):
        return (self.base * self.altura) / 2

    def perimetro(self):
        return 3 * self.lado

# Círculo
class Circulo(Figura):
    def __init__(self, radio):
        self.radio = radio

    def area(self):
        return math.pi * (self.radio ** 2)

    def perimetro(self):
        return 2 * math.pi * self.radio

# Crear lista con objetos de cada figura
figuras = [
    Rectangulo(4, 6),
    Triangulo(5, 4, 5),
    Circulo(3)
]

# Mostrar datos
print("=== Ejercicio 3 ===")
for f in figuras:
    print(f"{f.__class__.__name__}: Área = {f.area():.2f}, Perímetro = {f.perimetro():.2f}")
# geometria.py
import math

class Figura:
    def area(self):
        raise NotImplementedError("Debe implementar el método area()")

    def perimetro(self):
        raise NotImplementedError("Debe implementar el método perimetro()")

class Rectangulo(Figura):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto

    def area(self):
        return self.ancho * self.alto

    def perimetro(self):
        return 2 * (self.ancho + self.alto)

class Triangulo(Figura):
    def __init__(self, base, altura, lado):
        self.base = base
        self.altura = altura
        self.lado = lado

    def area(self):
        return (self.base * self.altura) / 2

    def perimetro(self):
        return 3 * self.lado

class Circulo(Figura):
    def __init__(self, radio):
        self.radio = radio

    def area(self):
        return math.pi * (self.radio ** 2)

    def perimetro(self):
        return 2 * math.pi * self.radio
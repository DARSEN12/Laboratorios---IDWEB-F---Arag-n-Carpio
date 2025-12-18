# Laboratorio 21 - Ejercicio 4

class Libro:
    def __init__(self, titulo, autor, anio):
        self.titulo = titulo
        self.autor = autor
        self.anio = anio
        self.disponible = True

    def prestar(self):
        if self.disponible:
            self.disponible = False
            return f"El libro '{self.titulo}' ha sido prestado."
        else:
            return f"El libro '{self.titulo}' no está disponible."

    def devolver(self):
        if not self.disponible:
            self.disponible = True
            return f"El libro '{self.titulo}' ha sido devuelto."
        else:
            return f"El libro '{self.titulo}' ya estaba disponible."

    def __str__(self):
        estado = "Disponible" if self.disponible else "Prestado"
        return f"{self.titulo} ({self.autor}, {self.anio}) - {estado}"


class LibroDigital(Libro):
    def __init__(self, titulo, autor, anio, formato, tamañoMB):
        super().__init__(titulo, autor, anio)
        self.formato = formato
        self.tamañoMB = tamañoMB

    def prestar(self):
        # Siempre disponible
        return f"El libro digital '{self.titulo}' está disponible en formato {self.formato} ({self.tamañoMB} MB)."

    def __str__(self):
        return f"{self.titulo} (Digital - {self.formato}, {self.tamañoMB} MB) - Siempre disponible"


class Biblioteca:
    def __init__(self):
        self.libros = []

    def agregar_libro(self, libro):
        self.libros.append(libro)

    def listar_libros(self):
        return "\n".join(str(libro) for libro in self.libros)

    def buscar_por_autor(self, autor):
        encontrados = [libro for libro in self.libros if libro.autor.lower() == autor.lower()]
        return encontrados if encontrados else f"No se encontraron libros de {autor}."

    def prestar_libro(self, titulo):
        for libro in self.libros:
            if libro.titulo.lower() == titulo.lower():
                return libro.prestar()
        return f"No se encontró el libro '{titulo}'."

# ------------------ PRUEBAS ------------------

biblioteca = Biblioteca()

# 3 libros físicos
biblioteca.agregar_libro(Libro("1984", "George Orwell", 1949))
biblioteca.agregar_libro(Libro("Cien años de soledad", "Gabriel García Márquez", 1967))
biblioteca.agregar_libro(Libro("El Principito", "Antoine de Saint-Exupéry", 1943))

# 2 libros digitales
biblioteca.agregar_libro(LibroDigital("Python Básico", "Fredy", 2025, "PDF", 2))
biblioteca.agregar_libro(LibroDigital("Machine Learning", "Fredy", 2025, "EPUB", 5))

print("=== Listar todos los libros ===")
print(biblioteca.listar_libros())

print("\n=== Prestar un libro físico ===")
print(biblioteca.prestar_libro("1984"))

print("\n=== Intentar prestar el mismo libro físico otra vez ===")
print(biblioteca.prestar_libro("1984"))

print("\n=== Prestar un libro digital 5 veces ===")
for _ in range(5):
    print(biblioteca.prestar_libro("Python Básico"))

print("\n=== Buscar libros por autor ===")
resultados = biblioteca.buscar_por_autor("Fredy")
if isinstance(resultados, list):
    for libro in resultados:
        print(libro)
else:
    print(resultados)
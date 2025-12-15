# Lista para almacenar estudiantes
estudiantes = []

def agregar_estudiante():
    nombre = input("Nombre: ")
    edad = int(input("Edad: "))
    promedio = float(input("Promedio: "))
    estudiante = {"nombre": nombre, "edad": edad, "promedio": promedio}
    estudiantes.append(estudiante)
    print("✅ Estudiante agregado correctamente.\n")

def mostrar_estudiantes():
    if not estudiantes:
        print("⚠️ No hay estudiantes registrados.\n")
    else:
        print("\n📋 Lista de estudiantes:")
        for est in estudiantes:
            print(f"Nombre: {est['nombre']}, Edad: {est['edad']}, Promedio: {est['promedio']}")
        print()

def mejor_promedio():
    if not estudiantes:
        print("⚠️ No hay estudiantes registrados.\n")
    else:
        mejor = max(estudiantes, key=lambda e: e["promedio"])
        print(f"🏆 Estudiante con mejor promedio: {mejor['nombre']} ({mejor['promedio']})\n")

def buscar_por_nombre():
    nombre = input("Ingresa el nombre a buscar: ")
    encontrados = [e for e in estudiantes if e["nombre"].lower() == nombre.lower()]
    if encontrados:
        for est in encontrados:
            print(f"✅ Encontrado: Nombre: {est['nombre']}, Edad: {est['edad']}, Promedio: {est['promedio']}")
    else:
        print("❌ No se encontró ningún estudiante con ese nombre.\n")

def eliminar_por_nombre():
    nombre = input("Ingresa el nombre a eliminar: ")
    global estudiantes
    estudiantes = [e for e in estudiantes if e["nombre"].lower() != nombre.lower()]
    print(f"🗑️ Estudiante(s) con nombre '{nombre}' eliminado(s).\n")

def menu():
    while True:
        print("=== Menú de opciones ===")
        print("1. Agregar estudiante")
        print("2. Mostrar estudiantes")
        print("3. Mostrar estudiante con mejor promedio")
        print("4. Buscar por nombre")
        print("5. Eliminar por nombre")
        print("6. Salir")

        opcion = input("Elige una opción: ")

        if opcion == "1":
            agregar_estudiante()
        elif opcion == "2":
            mostrar_estudiantes()
        elif opcion == "3":
            mejor_promedio()
        elif opcion == "4":
            buscar_por_nombre()
        elif opcion == "5":
            eliminar_por_nombre()
        elif opcion == "6":
            print("👋 Saliendo del programa...")
            break
        else:
            print("❌ Opción inválida, intenta nuevamente.\n")

# Ejecutar menú
menu()
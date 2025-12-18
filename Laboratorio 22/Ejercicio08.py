# Laboratorio 22 - Ejercicio 8

from wsgiref.simple_server import make_server
import json

# Base de datos en memoria
libros = []
next_id = 1

def app(environ, start_response):
    global next_id

    metodo = environ["REQUEST_METHOD"]
    path = environ["PATH_INFO"]

    # 1) GET /libros -> listar todos
    if metodo == "GET" and path == "/libros":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(libros).encode("utf-8")]

    # 2) POST /libros -> registrar nuevo
    elif metodo == "POST" and path == "/libros":
        try:
            length = int(environ.get("CONTENT_LENGTH", 0))
            body = environ["wsgi.input"].read(length).decode("utf-8")
            data = json.loads(body)

            # Crear nuevo libro con ID incremental
            nuevo_libro = {
                "id": next_id,
                "titulo": data.get("titulo"),
                "autor": data.get("autor"),
                "anio": data.get("anio")
            }
            libros.append(nuevo_libro)
            next_id += 1

            start_response("201 Created", [("Content-Type", "application/json")])
            return [json.dumps(nuevo_libro).encode("utf-8")]

        except Exception as e:
            start_response("400 Bad Request", [("Content-Type", "application/json")])
            return [json.dumps({"error": str(e)}).encode("utf-8")]

    # 3) GET /libros/<id> -> consultar por ID
    elif metodo == "GET" and path.startswith("/libros/"):
        try:
            libro_id = int(path.split("/")[-1])
            libro = next((l for l in libros if l["id"] == libro_id), None)

            if libro:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(libro).encode("utf-8")]
            else:
                start_response("404 Not Found", [("Content-Type", "application/json")])
                return [json.dumps({"error": "Libro no encontrado"}).encode("utf-8")]

        except ValueError:
            start_response("400 Bad Request", [("Content-Type", "application/json")])
            return [json.dumps({"error": "ID inválido"}).encode("utf-8")]

    # Ruta no encontrada
    else:
        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"Ruta no encontrada"]

# Crear servidor en localhost:8000
server = make_server("localhost", 8000, app)
print("Servidor WSGI corriendo en http://localhost:8000")
server.serve_forever()
# Laboratorio 22 - Ejercicio 6

from wsgiref.simple_server import make_server
import json

def app(environ, start_response):
    metodo = environ["REQUEST_METHOD"]
    path = environ["PATH_INFO"]

    # Solo aceptamos POST en la ruta "/sumar"
    if metodo == "POST" and path == "/sumar":
        try:
            # Leer el cuerpo de la petición
            length = int(environ.get("CONTENT_LENGTH", 0))
            body = environ["wsgi.input"].read(length).decode("utf-8")

            # Convertir JSON a diccionario
            data = json.loads(body)

            # Obtener valores y calcular suma
            a = int(data.get("a", 0))
            b = int(data.get("b", 0))
            resultado = {"suma": a + b}

            # Responder con JSON
            start_response("200 OK", [("Content-Type", "application/json")])
            return [json.dumps(resultado).encode("utf-8")]

        except Exception as e:
            # Manejo de errores
            start_response("400 Bad Request", [("Content-Type", "application/json")])
            return [json.dumps({"error": str(e)}).encode("utf-8")]

    # Si la ruta no existe
    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Ruta no encontrada"]

# Crear servidor en localhost:8000
server = make_server("localhost", 8000, app)
print("Servidor corriendo en http://localhost:8000")
server.serve_forever()
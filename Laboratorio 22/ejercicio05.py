# Laboratorio 22 - Ejercicio 5

from wsgiref.simple_server import make_server
import json

def app(environ, start_response):
    path = environ["PATH_INFO"]
    metodo = environ["REQUEST_METHOD"]

    # Ruta raíz "/" -> HTML estático
    if metodo == "GET" and path == "/":
        html = """
        <html>
        <head><title>Ejercicio 5</title></head>
        <body>
            <h1>Bienvenido al servidor WSGI</h1>
            <p>Esta es una página HTML estática.</p>
        </body>
        </html>
        """
        start_response("200 OK", [("Content-Type", "text/html; charset=utf-8")])
        return [html.encode("utf-8")]

    # Ruta "/saludo" -> JSON {"msg": "Hola"}
    elif metodo == "GET" and path == "/saludo":
        data = {"msg": "Hola"}
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(data).encode("utf-8")]

    # Si la ruta no existe -> 404
    else:
        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"Ruta no encontrada"]

# Crear servidor en localhost:8000
server = make_server("localhost", 8000, app)
print("Servidor corriendo en http://localhost:8000")
server.serve_forever()
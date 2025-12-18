# Laboratorio 22 - Ejercicio 7

from wsgiref.simple_server import make_server

def app(environ, start_response):
    path = environ["PATH_INFO"]

    # Ruta raíz "/"
    if path == "/":
        respuesta = b"Inicio"
        status = "200 OK"

    # Ruta "/saludo"
    elif path == "/saludo":
        respuesta = b"Hola mundo desde WSGI"
        status = "200 OK"

    # Cualquier otra ruta
    else:
        respuesta = b"Ruta no encontrada"
        status = "404 Not Found"

    # Encabezados
    headers = [("Content-Type", "text/plain")]
    start_response(status, headers)
    return [respuesta]

# Crear servidor en localhost:8000
server = make_server("localhost", 8000, app)
print("Servidor WSGI corriendo en http://localhost:8000")
server.serve_forever()
# Laboratorio 22 - Ejercicio 9

from wsgiref.simple_server import make_server
import json, os, mimetypes
from urllib.parse import unquote

# Carpeta de archivos estáticos
STATIC_DIR = "static"

# Base de datos en memoria
equipos = []
next_id = 1

def servir_estatico(path):
    """Lee un archivo desde /static/ si existe"""
    file_path = path.lstrip("/")
    full_path = os.path.join(STATIC_DIR, file_path.replace("static/", ""))

    if not os.path.isfile(full_path):
        return None, None

    content_type, _ = mimetypes.guess_type(full_path)
    if content_type is None:
        content_type = "application/octet-stream"

    with open(full_path, "rb") as f:
        return f.read(), content_type

def app(environ, start_response):
    global next_id
    metodo = environ["REQUEST_METHOD"]
    path = unquote(environ["PATH_INFO"])

    # Servir archivos estáticos
    if path.startswith("/static/"):
        contenido, tipo = servir_estatico(path)
        if contenido is None:
            start_response("404 Not Found", [("Content-Type", "text/plain")])
            return [b"Archivo no encontrado"]
        start_response("200 OK", [("Content-Type", tipo)])
        return [contenido]

    # GET "/" -> entregar index.html
    if metodo == "GET" and path == "/":
        contenido, tipo = servir_estatico("/static/index.html")
        start_response("200 OK", [("Content-Type", tipo)])
        return [contenido]

    # API: listar equipos
    if metodo == "GET" and path == "/equipos":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(equipos).encode("utf-8")]

    # API: registrar equipo
    if metodo == "POST" and path == "/equipos":
        try:
            length = int(environ.get("CONTENT_LENGTH", 0))
            body = environ["wsgi.input"].read(length).decode("utf-8")
            data = json.loads(body)

            nuevo_equipo = {
                "id": next_id,
                "nombre": data.get("nombre"),
                "ciudad": data.get("ciudad"),
                "nivelAtaque": int(data.get("nivelAtaque", 0)),
                "nivelDefensa": int(data.get("nivelDefensa", 0))
            }
            equipos.append(nuevo_equipo)
            next_id += 1

            start_response("201 Created", [("Content-Type", "application/json")])
            return [json.dumps(nuevo_equipo).encode("utf-8")]

        except Exception as e:
            start_response("400 Bad Request", [("Content-Type", "application/json")])
            return [json.dumps({"error": str(e)}).encode("utf-8")]

    # API: consultar equipo por ID
    if metodo == "GET" and path.startswith("/equipos/"):
        try:
            equipo_id = int(path.split("/")[-1])
            equipo = next((e for e in equipos if e["id"] == equipo_id), None)

            if equipo:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(equipo).encode("utf-8")]
            else:
                start_response("404 Not Found", [("Content-Type", "application/json")])
                return [json.dumps({"error": "Equipo no encontrado"}).encode("utf-8")]

        except ValueError:
            start_response("400 Bad Request", [("Content-Type", "application/json")])
            return [json.dumps({"error": "ID inválido"}).encode("utf-8")]

    # Ruta no encontrada
    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Ruta no encontrada"]

# Crear servidor
server = make_server("localhost", 8000, app)
print("Servidor WSGI corriendo en http://localhost:8000")
server.serve_forever()
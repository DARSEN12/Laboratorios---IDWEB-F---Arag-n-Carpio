# Laboratorio 21 - Ejercicio 9 (Threading)
# Autor: Fredy
# Colaboró: Copilot (IA)
# Tiempo: --

import threading, time, random

def consulta(nombre):
    tiempo = random.randint(1, 5)
    print(f"Iniciando {nombre} (espera {tiempo}s)")
    time.sleep(tiempo)
    print(f"Finalizó {nombre}")

inicio = time.time()
hilos = []

for i in range(1, 4):
    h = threading.Thread(target=consulta, args=(f"Consulta {i}",))
    h.start()
    hilos.append(h)

for h in hilos:
    h.join()

print("Tiempo total (threading):", round(time.time() - inicio, 2), "segundos")
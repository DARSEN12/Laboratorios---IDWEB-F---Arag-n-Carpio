# Laboratorio 21 - Ejercicio 5
# Autor: Fredy
# Colaboró: Copilot (IA)
# Tiempo: --

class OperadorInvalido(Exception):
    """Excepción personalizada para operadores inválidos"""
    pass

def calcular_operacion(operacion):
    try:
        # Separar componentes
        partes = operacion.split()
        if len(partes) != 3:
            raise ValueError("Formato inválido. Debe ser: numero1 operador numero2")

        num1_str, operador, num2_str = partes

        # Validar números
        try:
            num1 = float(num1_str)
            num2 = float(num2_str)
        except ValueError:
            raise ValueError("Los valores deben ser números válidos.")

        # Validar operador
        if operador not in ["+", "-", "*", "/"]:
            raise OperadorInvalido(f"Operador inválido: {operador}")

        # Realizar operación
        if operador == "+":
            return num1 + num2
        elif operador == "-":
            return num1 - num2
        elif operador == "*":
            return num1 * num2
        elif operador == "/":
            if num2 == 0:
                raise ZeroDivisionError("No se puede dividir entre cero.")
            return num1 / num2

    except ZeroDivisionError as e:
        return f"Error: {e}"
    except ValueError as e:
        return f"Error: {e}"
    except OperadorInvalido as e:
        return f"Error: {e}"

# ------------------ PRUEBAS ------------------

print("=== Ejercicio 5 ===")
print(calcular_operacion("10 / 2"))      # 5.0
print(calcular_operacion("8 * 3"))       # 24.0
print(calcular_operacion("5 / 0"))       # Error división
print(calcular_operacion("abc + 2"))     # Error valor inválido
print(calcular_operacion("10 ^ 2"))      # Error operador inválido
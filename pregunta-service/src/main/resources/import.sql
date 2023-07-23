-- Preguntas básicas
INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (1, 'basica', '¿Cuál es el resultado de la siguiente operación matemática?', '18', '8 + 5 * 2');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (2, 'basica', '¿Qué imprime el siguiente código?', '74', 'a = 3\nb = 7\nc = 9\na = c % b\nb = a // b % c\nprint(a * b + c % a + b + c)');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (3, 'basica', '¿Cuál es el valor final de x?', '8', 'x = 5\nx += 3');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (4, 'basica', '¿Cuál es el resultado de la siguiente operación matemática?', '18', '8 + 5 * 2');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (5, 'basica', '¿Qué imprime el siguiente código?', '74', 'a = 3\nb = 7\nc = 9\na = c % b\nb = a // b % c\nprint(a * b + c % a + b + c)');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (6, 'basica', '¿Cuál es el valor final de x?', '8', 'x = 5\nx += 3');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (7, 'intermedia', '¿Qué hace la función factorial?', 'Calcula el factorial de un número', 'def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (8, 'intermedia', '¿Cuál es el resultado de la función recursiva fib(7)?', '13', 'def fib(n):\n    if n <= 1:\n        return n\n    else:\n        return fib(n-1) + fib(n-2)\n\nprint(fib(7))');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (9, 'intermedia', 'Completa la función suma_elementos para que retorne la suma de todos los elementos de la lista', 'Suma de los elementos de la lista', 'def suma_elementos(lista):\n    suma = 0\n    for elemento in lista:\n        suma += elemento\n    return suma');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (10, 'intermedia', '¿Cuál es el resultado de la siguiente expresión booleana?', 'False', 'True and False or not False and True');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (11, 'intermedia', 'Completa la función media_lista para que retorne el valor medio de los elementos de la lista', 'Valor medio de los elementos', 'def media_lista(lista):\n    suma = 0\n    for elemento in lista:\n        suma += elemento\n    return suma / len(lista)');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (12, 'intermedia', '¿Cuál es el resultado de la función suma_elementos([3, 7, 2, 5, 1])?', '18', 'def suma_elementos(lista):\n    suma = 0\n    for elemento in lista:\n        suma += elemento\n    return suma\n\nprint(suma_elementos([3, 7, 2, 5, 1]))');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (13, 'avanzada', '¿Cuál es el resultado de la función recursiva suma_digitos(456)?', '15', 'def suma_digitos(n):\n    if n == 0:\n        return 0\n    else:\n        return n % 10 + suma_digitos(n // 10)\n\nprint(suma_digitos(456))');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (14, 'avanzada', 'Completa la función contar_letras para que retorne el número de veces que aparece cada letra en la cadena', 'Número de veces que aparece cada letra', 'def contar_letras(cadena):\n    diccionario = {}\n    for letra in cadena:\n        diccionario[letra] = diccionario.get(letra, 0) + 1\n    return diccionario');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (15, 'avanzada', '¿Cuál es el resultado de la función potencia(2, 5)?', '32', 'def potencia(base, exponente):\n    if exponente == 0:\n        return 1\n    else:\n        return base * potencia(base, exponente - 1)\n\nprint(potencia(2, 5))');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (16, 'avanzada', 'Completa la función invertir_cadena para que retorne la cadena invertida', 'gnirtS al ednatni aroC', 'def invertir_cadena(cadena):\n    if len(cadena) == 0:\n        return cadena\n    else:\n        return invertir_cadena(cadena[1:]) + cadena[0]\n\nprint(invertir_cadena("Correr al aire libre es mi deporte favorito"))');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (17, 'avanzada', 'Completa la función invertir_palabras para que retorne la cadena con las palabras invertidas', 'esrever eht ti ecnetnoc', 'def invertir_palabras(cadena):\n    palabras = cadena.split()\n    palabras_invertidas = [palabra[::-1] for palabra in palabras]\n    return " ".join(palabras_invertidas)');

INSERT INTO preguntas(id_pregunta, dificultad, enunciado, respuesta, codigo)
VALUES (18, 'avanzada', '¿Cuál es el resultado de la función potencia_rusa(4, 7)?', '28', 'def potencia_rusa(a, b):\n    resultado = 0\n    while b > 0:\n        if b % 2 == 1:\n            resultado += a\n        a *= 2\n        b //= 2\n    return resultado\n\nprint(potencia_rusa(4, 7))');

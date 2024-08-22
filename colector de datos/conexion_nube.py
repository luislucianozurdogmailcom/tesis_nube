import json
import requests

def insertar_medicion(id_nodo,id_parametrizacion,valor,fecha):

    """
    Programa que se encarga de tomar las mediciones realizadas por la placa CANBUS
    y enviarlas a la nube por medio de llamadas http
    """

    # Armamos la query
    query_insert = f"""
    INSERT INTO mediciones (id_nodo, id_parametrizacion, valor, fecha) 
    VALUES 
    ({id_nodo}, {id_parametrizacion}, {valor}, '{fecha}');
    """
    print(query_insert);

    # Enviamos la petición:
    url = f"""https://62bwhyuxp6.execute-api.us-east-2.amazonaws.com/prod/insertarData?query={query_insert}"""

    # Datos que enviaremos en el encabezado de la solicitud
    headers = {
        'Content-Type': 'application/json',  # Especificamos el tipo de contenido como JSON
        'client_id'   : 'administrador',
        'secret'      : 'ungs123'
    }

    # Realizamos la solicitud POST con los datos y encabezado especificados
    respuesta = requests.post(url, headers=headers)

    # Verificamos si la solicitud fue exitosa (código de estado 200)
    if respuesta.status_code == 200:
        print(respuesta.json())  # Imprimimos la respuesta del servidor en formato JSON
    else:
        print('Error al realizar la solicitud POST:', respuesta.status_code, ' ',respuesta.json())

# print(insertar_medicion(1,7,1.23,'2024-04-21 11:55:00.000'));
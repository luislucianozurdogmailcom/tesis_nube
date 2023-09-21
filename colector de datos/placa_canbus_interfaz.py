# from microredes_lib.placa_canbus_conexion import lectura
import requests as rs

def medicion_guardado_nube():
    
    # datos = lectura();
    
    url = 'https://us-central1-paneles-solares-ungs.cloudfunctions.net/insertMedicion'
    
    # Contraseña de pase:
    headers = {
        'client_id': 'ungs_energia',
        'secret': '0f1abfe5ae3b407ff3'
    }

    # Parámetros de la solicitud GET
    params = {
        'idNodo': '1',
        'idSensor': '1',
        'valor': '1000'
    }

    # Realizar la solicitud GET
    response = rs.get(url, headers=headers, params=params);

    # Comprobar la respuesta
    if response.status_code == 200:
        print('Solicitud exitosa')
        print('Respuesta del servidor:', response.text)
    else:
        print('Error en la solicitud. Código de estado:', response.status_code)

# Prueba:
medicion_guardado_nube()
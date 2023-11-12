
import time
import numpy as np

import sys, os
from microredes_lib.microredes import microredes as mr # Importación de la librería


def lectura_windows(puerto_pc='COM6',target='3',entrada_analogica=0):
    """
    Funcion que tiene por objetivo abstraer un poco lo lógica de 
    conexión y pedido de los datos
    """
    
    
    bus = mr.Microredes(puerto_pc, '115200') # Conexión al BUS

    bus.set_target(target) # Setea la dirección de destino del equipo a consultar
    query_id = bus.qry_analog_in(entrada_analogica, interval=0) # Lee la entrada analógica 0 con un intervalo de 1 segundo

    #bus.set_target(4) # Setea la dirección de destino del equipo a consultar
    #query_id = bus.qry_analog_in(0, interval=1) # Lee la entrada analógica 0 con un intervalo de 1 segundo
    
    res = bus.can_read()

    if len(res):
      return res;
    else:
       return False;

def lectura_linux(puerto_pc='/dev/ttyUSB0',target='3',entrada_analogica=0):
    """
    Funcion que tiene por objetivo abstraer un poco lo lógica de 
    conexión y pedido de los datos
    """
    
    
    bus = mr.Microredes(puerto_pc, '115200') # Conexión al BUS

    bus.set_target(target) # Setea la dirección de destino del equipo a consultar
    query_id = bus.qry_analog_in(entrada_analogica) # Lee la entrada analógica 0 con un intervalo de 1 segundo
    
    res = bus.can_read(); # Leemos los datos que tenemos

    print(query_id)
    #bus.stop_listener(query_id)  # Detiene la consulta

    if len(res):
      return res;
    else:
       return False;


# print(lectura_linux(target=3,entrada_analogica=0))
print(lectura_linux(target=3,entrada_analogica=0))

# Ejemplo de respuesta
#[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-14 17:49:15.294051', 'data': ['0x1', '0x3', '0x0', '0x4', '0xe5', '0x0', '0x0', '0x0'], 'valor': 4.493193358264934e+16, 'unidad': 'v'}]
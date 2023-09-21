#[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-14 17:49:15.294051', 'data': ['0x1', '0x3', '0x0', '0x4', '0xe5', '0x0', '0x0', '0x0'], 'valor': 4.493193358264934e+16, 'unidad': 'v'}]

import time
import numpy as np
#import conexion_db as con
#import lector_nodos_input
from microredes import microredes as mr # Importación de la librería

bus = mr.Microredes('COM6', '115200') # Conexión al BUS

bus.set_target(3) # Setea la dirección de destino del equipo a consultar
query_id = bus.qry_analog_in(0, interval=0) # Lee la entrada analógica 0 con un intervalo de 1 segundo

#bus.set_target(4) # Setea la dirección de destino del equipo a consultar
#query_id = bus.qry_analog_in(0, interval=1) # Lee la entrada analógica 0 con un intervalo de 1 segundo

cont = 0  # Inicio contador en 0
while True:  # Lee en bucle infinito la respuesta desde el BUS
  res = bus.can_read()

  if len(res):
    print(res)
    

"""
f', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:48:58.005622', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa1', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:48:59.007583', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa0', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}, {'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:48:59.007583', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa3', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:00.008750', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa4', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:01.010580', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa7', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:02.012139', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa1', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:03.012583', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa2', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:04.014307', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa2', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:05.015615', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa1', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:06.015795', 'data': ['0x1', '0x3', '0x0', '0x5', '0xae', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:07.017923', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa7', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:08.019958', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa4', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:09.021618', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa5', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:10.023264', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa3', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:11.022141', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa9', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:12.022254', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa8', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:13.022523', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa4', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:14.022935', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa6', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:15.026340', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa1', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:16.027257', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa7', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:17.027724', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa7', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:18.028382', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa5', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:19.028976', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa2', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:20.012434', 'data': ['0x1', '0x3', '0x0', '0x5', '0xad', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:21.015356', 'data': ['0x1', '0x3', '0x0', '0x5', '0xaf', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:22.016445', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa8', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:23.017252', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa8', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:24.019669', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa9', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:25.021462', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa4', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:26.022507', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa8', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:27.023907', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa8', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:28.025573', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa8', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:29.026848', 'data': ['0x1', '0x3', '0x0', '0x5', '0xaf', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:30.028128', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa2', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:31.029793', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa5', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:32.030030', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa4', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:33.031116', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa3', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:34.033415', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa3', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:35.033423', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa5', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:36.033440', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa9', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:37.034627', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa4', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:38.030150', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa3', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:39.031982', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa9', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:40.034523', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa7', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
[{'origen': '0x3', 'status': 'ACK', 'timestamp': '2023-09-07 17:49:41.036650', 'data': ['0x1', '0x3', '0x0', '0x5', '0xa5', '0x0', '0x0', '0x0'], 'valor': 1.03125, 'unidad': 'v'}]
"""
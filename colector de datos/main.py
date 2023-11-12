import time
import conexion_db
import placa_canbus_conexion

while True:
    
    # Leemos la placa
    lectura = placa_canbus_conexion.lectura_linux(puerto_pc='/dev/ttyUSB0',target='3',entrada_analogica=0);

    print(lectura)

    # Delay
    # time.sleep(30);
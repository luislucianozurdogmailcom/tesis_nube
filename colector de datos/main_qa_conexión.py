import placa_canbus_conexion as pcc
import utils

# Se habilita el puerto para comunicación 
utils.habilitar_puerto_linux();

print(pcc.lectura_linux_qa(puerto_pc='/dev/ttyUSB0',target='3',entrada_analogica=1))
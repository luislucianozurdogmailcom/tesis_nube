import time
import subprocess
import platform

# Obtener el nombre del sistema operativo
sistema_operativo = platform.system()


# Comprobar si es Linux
if sistema_operativo == "Linux":
    
    while True:
        
        print('Entramos por linux')
        # Ejecutar la consulta a la placa canbus mediante el sistema operativo
        linux_command = f"python main.py --puerto /dev/ttyUSB0 --id 3 --entrada 2 --intervalo 0 --sistema {sistema_operativo}"
        linux_result = subprocess.run(linux_command, shell=True, capture_output=True, text=True);
        print("Resultado en Linux:", linux_result.stdout);

        # Esperamos un tiempo determinado
        time.sleep(120);


# Comprobar si es Windows
elif sistema_operativo == "Windows":
    
    windows_command = "dir"
    windows_result = subprocess.run(windows_command, shell=True, capture_output=True, text=True)
    print("Resultado en Windows:", windows_result.stdout)


# Comprobar si es macOS
elif sistema_operativo == "Darwin":
    print("Estás en un sistema macOS.")


# Si no es ninguno de los anteriores, imprimir un mensaje de advertencia
else:
    print("El sistema operativo no es reconocido o compatible.")

"""


# Ejecutar un comando en Windows


"""
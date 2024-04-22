import os
import pyudev
import subprocess


def obtener_path_completo(archivo=''):

    # Obtener la ruta actual
    ruta_actual   = os.getcwd()

    # Ajuduntamos la ruta completa
    print(os.path.join(ruta_actual,archivo));
    return os.path.join(ruta_actual,archivo)

def setear_variable_de_entorno(texto):

    # Ruta local de las credenciales de firebase
    ruta_credenciales                            = os.getcwd() + texto;
    # Seteamos la variable de entorno
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = ruta_credenciales
    print('Variable de entorno seteada correctamente: ',ruta_credenciales);

def obtener_puerto_conexion_linux(fabricante_filtro = 'silicon labs'):
    context            = pyudev.Context();
    dispositivos_usb   = [dispositivo for dispositivo in context.list_devices(subsystem='usb')];
    lista_dispositivos = [];
    
    if not dispositivos_usb:
        print("No se encontraron dispositivos USB conectados.")
    else:
        # print("Dispositivos USB conectados:")
        for dispositivo in dispositivos_usb:
            id_dispositivo = dispositivo.get('ID_MODEL_ID')
            fabricante     = dispositivo.get('ID_VENDOR_FROM_DATABASE', 'Desconocido')
            modelo         = dispositivo.get('ID_MODEL_FROM_DATABASE', 'Desconocido')
            devpath        = dispositivo.get('DEVPATH')

            # Obtener información del puerto a través de sysfs
            busnum     = dispositivo.parent.get('BUSNUM')
            devnum     = dispositivo.parent.get('DEVNUM')
            puerto_usb = f"/dev/bus/usb/{busnum}/{devnum}";

            """
            print(f"ID del dispositivo: {id_dispositivo}")
            print(f"Fabricante: {fabricante}")
            print(f"Modelo: {modelo}")
            print(f"Puerto USB: {puerto_usb}")
            print(f"Ubicación: {devpath}")
            print("----")
            """
            
            lista_dispositivos.append({'fabricante' : fabricante,
                                       'modelo'     : modelo,
                                       'puerto_usb' : puerto_usb,
                                       'busnum'     : busnum,
                                       'devnum'     : devnum
                                       })

    # Filtramos los que no nos importan
    if fabricante and dispositivos_usb:
        return [dispositivo for dispositivo in lista_dispositivos if fabricante_filtro in str(dispositivo['fabricante']).lower()];
    
    else:
        return lista_dispositivos;

def habilitar_puerto_linux():
    # Comando para cambiar los permisos del dispositivo
    chmod_command = "sudo chmod a+rw /dev/ttyUSB0"

    # Ejecutar el comando
    subprocess.run(chmod_command, shell=True)

    print("Puerto habilitado para comunicación con CANBUS")

#obtener_path_completo('paneles-solares-ungs-firebase.json');
    
# print(obtener_puerto_conexion_linux(fabricante_filtro = 'silicon labs'))
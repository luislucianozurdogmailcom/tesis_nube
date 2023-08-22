import os


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

obtener_path_completo('paneles-solares-ungs-firebase.json');
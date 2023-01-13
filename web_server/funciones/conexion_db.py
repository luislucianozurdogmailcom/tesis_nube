import mysql.connector
import datetime
import platform

# Funcion para hacer los selects
def conexion_peticion(query):
    # Fabricamos la conexión
    if platform.system() == 'Windows':
        password   = 'Ariscopata1';
    
    elif platform.system() == 'Linux':
        password   = 'Ariscopata1$';
    
    miConexion = mysql.connector.connect( host='localhost', user= 'root', passwd=password, db='ungsenergia' )
    cursor     = miConexion.cursor();

    # Ejecutamos la query
    cursor.execute(query);
    datos      = [];

    # Ponemos los datos en una lista
    for i in cursor.fetchall() :
        datos.append(i);
    miConexion.close()

    #Retornamos los datos
    return datos;

def conexion():
    # Fabricamos la conexión
    if platform.system() == 'Windows':
        password   = 'Ariscopata1';
    
    elif platform.system() == 'Linux':
        password   = 'Ariscopata1$';

    miConexion = mysql.connector.connect( host='localhost', user= 'root', passwd=password, db='ungsenergia' )

    # Devolvemos la conexion
    return miConexion

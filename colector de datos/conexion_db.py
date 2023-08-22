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

# Funcion para hacer los insert de mediciones
def conexion_insertar_datos(datos):
    # Fabricamos la conexión
    if platform.system() == 'Windows':
        password   = 'Ariscopata1';
    
    elif platform.system() == 'Linux':
        password   = 'Ariscopata1$';

    miConexion = mysql.connector.connect( host='localhost', user= 'root', passwd=password, db='ungsenergia' )
    cursor     = miConexion.cursor();

    # Creamos los datos para insertar
    query      = f"INSERT INTO mediciones (id_nodo, id_sensor, valor, fecha) VALUES (%s, %s, %s, %s)"
    valores    = (datos[0], datos[1], datos[2], str(datetime.datetime.now())[:-7]);

    # Ejecutamos la query
    try:
        cursor.execute(query, valores);
    except:
        return False;

    # Guardamos el cambio y cerramos la conexión
    miConexion.commit()
    miConexion.close()
    return True

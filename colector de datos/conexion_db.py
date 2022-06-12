import mysql.connector
import datetime

# Funcion para hacer los selects
def conexion_peticion(query):
    # Fabricamos la conexión
    miConexion = mysql.connector.connect( host='localhost', user= 'root', passwd='Ariscopata1', db='ungsenergia' )
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
    miConexion = mysql.connector.connect( host='localhost', user= 'root', passwd='Ariscopata1', db='ungsenergia' )
    cursor     = miConexion.cursor();

    # Buscamos el id mas grande de la base de datos
    cursor.execute('select max(id_medicion) from mediciones');
    id_maximo = cursor.fetchall()[0][0];
    id_maximo = id_maximo + 1;

    # Creamos los datos para insertar
    query      = f"INSERT INTO mediciones VALUES (%s, %s, %s, %s, %s)"
    valores    = (id_maximo, datos[0], datos[1], datos[2], str(datetime.datetime.now())[:-7]);

    # Ejecutamos la query
    try:
        cursor.execute(query, valores);
    except:
        return False;

    # Guardamos el cambio y cerramos la conexión
    miConexion.commit()
    miConexion.close()
    return True

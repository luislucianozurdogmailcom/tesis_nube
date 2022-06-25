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

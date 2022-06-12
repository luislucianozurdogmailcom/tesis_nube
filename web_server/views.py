from django.http import HttpResponse
from django.shortcuts import render
from django.template import Template,Context
import mysql.connector

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

# Pagina de prueba HOME como plantilla
def home(request):

    # Creamos la Query
    query = 'select * from mediciones';

    # Pedimos a la db
    datos = conexion_peticion(query)

    # Abrimos la plantilla
    plantilla = open("""F:/FACULTAD/Proyecto Integrador Final/Python Scripts/templates/landing.html""");

    # Creamos el template
    template  = Template(plantilla.read());

    # Cerramos el archivo
    plantilla.close();

    # Creamos el contexto
    contexto = Context({"variable":datos[0]});

    # Creamos el archivito a responder o renderizar
    documento = template.render(contexto);
    return HttpResponse(documento)

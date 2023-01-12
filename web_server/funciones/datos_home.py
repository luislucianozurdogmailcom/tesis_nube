from web_server.funciones.conexion_db import conexion_peticion
#from conexion_db import conexion_peticion
import pandas as pd

def datos_default_home(usuario, nodo = "", magnitud = "", resultados = 20):

    if (nodo == "" and magnitud == ""):
        query_home = f"""
        select id_nodo as nodo,
        sensor,
        Valor as medicion,
        CONCAT_WS(" ",ordenmagnitud,magnitudfisica) AS entidad_fisica,
        Fecha,
        error
        from mediciones
        inner join sensores on sensores.id_sensor = mediciones.id_sensor
        inner join `magnitud fisica` mf on mf.id_magnitudfisica = sensores.id_magnitudfisica
        where id_nodo in
        (select permisos.id_nodo from permisos
        where permisos.id_usuario in
        (select id_usuario from usuarios
        where usuarios.usuario = "{usuario}"))  and id_nodo = 1
        order by Fecha
        limit {resultados}
        """
    elif (nodo != "" and magnitud == ""):
        query_home = f"""
        select id_nodo as nodo,
        sensor,
        Valor as medicion,
        CONCAT_WS(" ",ordenmagnitud,magnitudfisica) AS entidad_fisica,
        Fecha,
        error
        from mediciones
        inner join sensores on sensores.id_sensor = mediciones.id_sensor
        inner join `magnitud fisica` mf on mf.id_magnitudfisica = sensores.id_magnitudfisica
        where id_nodo in
        (select permisos.id_nodo from permisos
        where permisos.id_usuario in
        (select id_usuario from usuarios
        where usuarios.usuario = "{usuario}")) and id_nodo = {nodo}
        order by Fecha
        limit {resultados}
        """
    elif (nodo == "" and magnitud != ""):
        query_home = f"""
        select id_nodo as nodo,
        sensor,
        Valor as medicion,
        CONCAT_WS(" ",ordenmagnitud,magnitudfisica) AS entidad_fisica,
        Fecha,
        error
        from mediciones
        inner join sensores on sensores.id_sensor = mediciones.id_sensor
        inner join `magnitud fisica` mf on mf.id_magnitudfisica = sensores.id_magnitudfisica
        where id_nodo in
        (select permisos.id_nodo from permisos
        where permisos.id_usuario in
        (select id_usuario from usuarios
        where usuarios.usuario = "{usuario}")) and magnitudfisica = "{magnitud}" and id_nodo = 1
        order by Fecha
        limit {resultados}
        """
    else:
        query_home = f"""
        select id_nodo as nodo,
        sensor,
        Valor as medicion,
        CONCAT_WS(" ",ordenmagnitud,magnitudfisica) AS entidad_fisica,
        Fecha,
        error
        from mediciones
        inner join sensores on sensores.id_sensor = mediciones.id_sensor
        inner join `magnitud fisica` mf on mf.id_magnitudfisica = sensores.id_magnitudfisica
        where id_nodo in
        (select permisos.id_nodo from permisos
        where permisos.id_usuario in
        (select id_usuario from usuarios
        where usuarios.usuario = "{usuario}")) and magnitudfisica = "{magnitud}" and id_nodo = {nodo}
        order by Fecha 
        limit {resultados}
        """


    columnas = ["nodo","sensor","medicion","entidad_fisica","fecha","error"]

    # Pedimos los datos
    datos = conexion_peticion(query_home);

    # Transformamos los datos a DF y luego a JSON
    df     = pd.DataFrame(datos,columns = columnas);
    df_dic = df.to_dict('list');

    # Transformamos los timestamps a strings
    df_dic['fecha'] = [str(i) for i in df_dic['fecha']];

    # Pasamos el DF a tuplas

    return df_dic

# print(datos_default_home('admin'))

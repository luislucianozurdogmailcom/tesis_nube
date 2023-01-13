from web_server.funciones.conexion_db import conexion_peticion
import pandas as pd

def datos_default_home(usuario, nodo = "", resultados = 20):

    if (nodo == ""):
        query_home = f"""
        with tabla_permisos as (
        select
        	p.id_nodo,
        	u.usuario,
            n.locacion 
        from
        	permisos p
        inner join usuarios u ON
        	p.id_usuario = u.id_usuario
        inner join nodos n on 
	        n.id_nodo = p.id_nodo
        where
        	u.usuario = '{usuario}'
        )
        select
        	tp.id_nodo,
            tp.locacion,
        	tp.usuario,
        	m.valor,
        	s.rango_minimo,
        	s.rango_maximo,
        	s.rango_digital_minimo,
        	s.rango_digital_maximo,
        	CONCAT(mf.ordenmagnitud , ' ', mf.magnitudfisica) as magnitud_fisica,
            m.fecha
        from
        	tabla_permisos tp
        inner join mediciones m on
        	m.id_nodo = tp.id_nodo
        inner join sensores s on
        	s.id_sensor = m.id_sensor
        inner join `magnitud fisica` mf on
        	mf.id_magnitudfisica = s.id_magnitudfisica
        limit {resultados}
        """
    elif (nodo != ""):
        query_home = f"""
        with tabla_permisos as (
        select
        	p.id_nodo,
        	u.usuario,
            n.locacion 
        from
        	permisos p
        inner join usuarios u ON
        	p.id_usuario = u.id_usuario
        inner join nodos n on 
        	n.id_nodo = p.id_nodo
        where
        	u.usuario = '{usuario}' and p.id_nodo = {nodo}
        )
        select
        	tp.id_nodo,
            tp.locacion,
        	tp.usuario,
        	m.valor,
        	s.rango_minimo,
        	s.rango_maximo,
        	s.rango_digital_minimo,
        	s.rango_digital_maximo,
        	CONCAT(mf.ordenmagnitud , ' ', mf.magnitudfisica) as magnitud_fisica,
            m.fecha
        from
        	tabla_permisos tp
        inner join mediciones m on
        	m.id_nodo = tp.id_nodo
        inner join sensores s on
        	s.id_sensor = m.id_sensor
        inner join `magnitud fisica` mf on
        	mf.id_magnitudfisica = s.id_magnitudfisica
        limit {resultados}
        """

    columnas = ["id_nodo","locacion","usuario","valor","rango_minimo","rango_maximo","rango_digital_minimo","rango_digital_maximo","magnitud_fisica","fecha"];

    # Pedimos los datos
    datos  = conexion_peticion(query_home);

    # Transformamos los datos a DF y luego a JSON
    df     = pd.DataFrame(datos,columns = columnas);
    df_dic = df.to_dict('list');

    # Transformamos los timestamps a strings
    df_dic['fecha'] = [str(i) for i in df_dic['fecha']];

    # Pasamos el DF a tuplas

    return df_dic

# print(datos_default_home('admin'))

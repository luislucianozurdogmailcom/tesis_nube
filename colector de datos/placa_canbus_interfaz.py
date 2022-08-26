import time
import numpy as np
import conexion_db as con
import lector_nodos_input
# from microredes import microredes as mr # Importación de la librería

# Bandera que guarda el valor del estado de carga
bandera_sin_errores = False

# Conexión al BUS
# bus = mr.Microredes('/dev/ttyUSB0', '115200') 

while bandera_sin_errores == False:

    # Traemos los nodos
    nodos, lista_campos, df = lector_nodos_input.nodos_activos();
    
    # Iteramos sobre todos los nodos
    for nodo in nodos:

        for campo in lista_campos:
            if bool(df[df['nodos'] == nodo][campo].values) and campo != 'Activado':

                print('Del nodo %d, extraemos el dato %s' %(nodo,campo));
        
                time.sleep(10);
        """
        # Seteamos la dirección de destino del equipo a consultar
        bus.set_target(i);

        # Leemos la entrada analogíca
        bus.qry_analog_in()

        # Insertamos los datos %Nodo | %Sensor | %Medicion
        con.conexion_insertar_datos([1,1,datos[0]]);
        con.conexion_insertar_datos([1,2,datos[1]]);
        con.conexion_insertar_datos([1,3,datos[2]]);

        print(datos)

        time.sleep(30);
        """

    """
    try:
        medicion = np.random.rand(2) * 2000;
        estado   = round(np.random.rand()*2-1);

        datos = [round(medicion[0]), round(medicion[1]), estado];
    except:
        bandera_sin_errores = True
        print('Error en la lectura de datos')
    """
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
    
    """
    # Iteramos sobre todos los nodos
    for nodo in nodos:

        for campo in lista_campos:
            if bool(df[df['nodos'] == nodo][campo].values) and campo != 'Activado':

                print('Del nodo %d, extraemos el dato %s' %(nodo,campo));
        
                time.sleep(10);
        
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
    print('Arrancamo el programita');

    try:
        # Leemos los nodos que tenemos:
        for nodo in nodos:

            # Iteramos sobre los campos
            for campo in lista_campos:

                # Verificamos que esté activado el sensor y nodo
                if bool(df[df['nodos'] == nodo][campo].values) and campo != 'Activado':
                        
                    # Extraemos el numero de pin de la placa para la cual estamos preguntando
                    pin_placa   = campo[-1];
                    
                    # Verificamos si es analógico o digital
                    is_analogic = 1 if 'analogica' in campo.lower() else 0;

                    # Buscamos el pin en lo que existe dado de alta en la DB
                    id_sensor = con.conexion_peticion(f'select id_sensor from sensores s where s.id_nodo = {nodo} and pin_en_placa = {pin_placa} and is_analogic = {is_analogic} order by id_sensor desc limit 1');
                    
                    # Avisamos si el nodo que estas activando no está dado de alta en la base de datos.
                    if not id_sensor:
                        
                        print(f'\nHay un sensor que no está dado de alta y que lo estas activando para leer! : \nEl sensor es el {pin_placa} y el nodo es {nodo}. Revisalo por favor! ');
                                
                        # Pasamos al siguiente elemento en la lista de campos
                        continue;
                            
                    # Si el nodo y sensor que estas activando está funcional, insertamos el data en la DB
                    else:
                        
                        #----------------- Simulación de datos de entrada ----------------------------------------

                        # Inventamos un número y un estado para meter algo a la DB
                        medicion = np.random.rand(1)[0] * 2000;
                        estado   = round(np.random.rand());

                        # Insertamos los datos en forma de array
                        insert_exitoso = con.conexion_insertar_datos([str(nodo), str(id_sensor[0][0]), str(medicion)]);

                        print(f'El dato a insertar es: {[str(nodo), str(id_sensor[0][0]), str(medicion)]}')
                        print(f'El insert ha sido exitoso: {insert_exitoso}');

                        # ----------------------------------------------------------------------------------------    
                    time.sleep(10)
                    
                    """
                        #Imprimimos en pantalla que nodo y que dato de ese nodo vamos a leer/insertar en la DB
                        print('Del nodo %d, extraemos el dato %s' %(nodo,campo));

                        time.sleep(10);

                        # Inventamos un número y un estado para meter algo a la DB
                        medicion = np.random.rand(1) * 2000;
                        estado   = round(np.random.rand());

                        datos = [round(medicion[0]), round(medicion[1]), estado];

                        con.conexion_insertar_datos([nodo,,datos[2]]);
                    """


    except:
        bandera_sin_errores = True;
        print('Error en la lectura de datos')

    
    
    

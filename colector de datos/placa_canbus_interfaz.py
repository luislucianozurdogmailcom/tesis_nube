import time
import numpy as np
import conexion_db as con

# Bandera que guarda el valor del estado de carga
bandera_sin_errores = False

while bandera_sin_errores == False:

    try:
        medicion = np.random.rand(2) * 2000;
        estado   = round(np.random.rand()*2-1);

        datos = [round(medicion[0]), round(medicion[1]), estado];
    except:
        bandera_sin_errores = True
        print('Error en la lectura de datos')
    # Insertamos los datos %Nodo|%Sensor|%Medicion
    con.conexion_insertar_datos([1,1,datos[0]]);
    con.conexion_insertar_datos([1,2,datos[1]]);
    con.conexion_insertar_datos([1,3,datos[2]]);

    print(datos)

    time.sleep(30);

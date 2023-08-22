import pandas as pd
import os
import platform

def nodos_activos():
    
    # Obtenemos la ruta relativa
    ruta = os.getcwd();
    
    # Construimos la ruta del archivo
    ruta = ruta[::-1];
    
    # Ejecutamos un codigo u otro dependiendo el sistema operativo en el que estemos
    # debido a que las rutas cambian

    if platform.system() == 'Windows': 
        # Tratamiento de string a la ruta para subir un level
        ruta = ruta[ruta.find('\\'):];
        ruta = ruta[::-1];
        ruta = ruta + 'csv_receptor\\parametros_nodos.xlsx';


    elif platform.system() == 'Linux':
        # Tratamiento de string a la ruta para subir un level
        ruta = ruta[ruta.find('/',1,len(ruta)):];
        ruta = ruta[::-1];
        ruta = ruta + 'csv_receptor/parametros_nodos.xlsx';


    # Creamos el dataframe
    df   = pd.read_excel(ruta);

    # Hacemos la lista de los nodos
    lista_nodos  = df['nodos'].tolist();
    lista_campos = df.drop(columns = 'nodos').columns;
    
    return lista_nodos,lista_campos,df;

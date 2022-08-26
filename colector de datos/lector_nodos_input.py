import pandas as pd
import os

def nodos_activos():
    # Obtenemos la ruta relativa
    ruta = os.getcwd();
    
    # Construimos la ruta del archivo
    ruta = ruta[::-1];
    ruta = ruta[ruta.find('\\'):];
    ruta = ruta[::-1];
    ruta = ruta + 'csv_receptor\\parametros_nodos.xlsx';

    # Creamos el dataframe
    df   = pd.read_excel(ruta);

    # Hacemos la lista de los nodos
    lista_nodos  = df['nodos'].tolist();
    lista_campos = df.drop(columns = 'nodos').columns;
    
    return lista_nodos,lista_campos,df;

import argparse
import conexion_db
import placa_canbus_conexion
import utils
import conexion_nube as cn


def main(parametros):
    
    # Se habilita el puerto para comunicación 
    utils.habilitar_puerto_linux();

    # Analizar los parámetros
    parser = argparse.ArgumentParser(description='Descripción de main.py');
    parser.add_argument('--puerto', help='Puerto de conexión');
    parser.add_argument('--id', type=int, help='ID de la placa');
    parser.add_argument('--entrada', type=int, help='Entrada analógica');
    parser.add_argument('--intervalo', type=int, help='Intervalo');
    parser.add_argument('--sistema', help='Intervalo');
    args = parser.parse_args(parametros)

    # Nos conectamos a la placa utilizando los parámetros recibidos para el sistema linux
    if args.sistema == 'Linux':
        bus, query_id         = placa_canbus_conexion.lectura_linux(
            puerto_pc         = args.puerto,
            target            = args.id,
            entrada_analogica = args.entrada,
            intervalo         = args.intervalo
        );

    if args.sistema == 'Windows':
        # Nos conectamos a la placa utilizando los parámetros recibidos para el sistema windows
        bus, query_id         = placa_canbus_conexion.lectura_windows(
            puerto_pc         = args.puerto,
            target            = args.id,
            entrada_analogica = args.entrada,
            intervalo         = args.intervalo
        );

    # Extraemos el resultado de llamar a la función
    medicion = bus.can_read();

    # Separamos los valores que nos interesan
    valor    = medicion[0]['valor'];
    fecha    = medicion[0]['timestamp'];
    
    # Enviamos la medición a la base de datos en la núbe:
    cn.insertar_medicion(3,10,valor,fecha);



if __name__ == "__main__":
    # Parsear los argumentos de línea de comandos
    parser = argparse.ArgumentParser(description='Descripción de main.py')
    args, other_args = parser.parse_known_args()

    # Llamar a la función principal pasando los argumentos restantes
    main(other_args)

# Se habilita el puerto para comunicación 
# utils.habilitar_puerto_linux();

# Nos conectamos a la placa de id 3 y preguntamos por la entrada analógica 0
# bus,query_id = placa_canbus_conexion.lectura_linux(puerto_pc='/dev/ttyUSB0',target=3,entrada_analogica=0,intervalo=0);
# print(bus.can_read());

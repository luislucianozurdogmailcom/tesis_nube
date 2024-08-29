import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faRotate } from '@fortawesome/free-solid-svg-icons';
import Scaffold from '../componentes/scaffold_components/Scaffold';
import Controller from '../componentes/controller_components/controller';
import ApiCall from '../servicios/ApiCall';
import { query_sensores_activos } from '../utils/querys';
import { ToastContainer } from 'react-toastify';

const ControllerButton = ({ icon, color, label }) => {
  return (
    <button className='flex flex-row items-center text-white font-medium py-4 px-4 rounded-md' style={{ backgroundColor: color }}>
      <FontAwesomeIcon icon={icon} className='text-2xl text-white pr-5' />
      {label}
    </button>
  );
}

const Controllers = () => {

  //Seteamos las variables de estado de los 
  const [sensores_activos, setSensores_activos] = useState([]);
  const [loading, setLoading]                   = useState(true);
  const [error, setError]                       = useState(null);

  // Querys para la llamada al servicio directo a la DB
  const query_sensores_activos_controller = query_sensores_activos();

  // Llamadas a los servicios
  useEffect(() => {
    const fetchData = async () => {
        try {
            // Llama a los datos para el piechart
            const result      = await ApiCall(query_sensores_activos_controller);
            const result_json = result.map(([id_sensor, pin_en_placa, sensor, encendido]) => ({id_sensor, pin_en_placa, sensor, encendido}));
            setSensores_activos(result_json);

        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError(error);
        } finally {
            setLoading(false);
        };
    };
    
    fetchData();
    }, [query_sensores_activos_controller]);

  // Validamos que las variables vengan llenas:
  const sensores_filas_controllers = (dataArray) => {
    // Filtramos los datos que vienen vacios
    const validDataArray = dataArray.filter(data => data && data.id_sensor > 0);

    // Creamos el array de objetos JSON solo con los datos válidos
    return validDataArray.map(data => ({
      data : data
    }));
  }

  const controller_sensores = sensores_filas_controllers(sensores_activos).map((element) => {

    return {name        : 'Pin en placa n°: '+element.data.pin_en_placa, 
            type        : 'switch',
            description : element.data.sensor,
            encendido   : element.data.encendido,
            id_sensor   : element.data.id_sensor
          }
  });

  
  /* Sensores de ejemplo
  const controllers = [
    { name: 'Switch 1', type: 'switch' , description: 'Este tipo de input se refiere a datos de tipo on/off que desee cambiar en la placa, por ejemplo dejar de medir "x" entrada o comenzar a hacerlo'},
    { name: 'Variable 1', type: 'switch', description: 'Este tipo de input se refiere a datos de tipo analógicos que desee cambiar en la placa, por ejemplo setear una salida con "x" voltaje' },
    { name: 'Switch 2', type: 'switch' , description: 'Este tipo de input se refiere a datos de tipo on/off que desee cambiar en la placa, por ejemplo dejar de medir "x" entrada o comenzar a hacerlo' },
    { name: 'Variable 2', type: 'switch', description: 'Este tipo de input se refiere a datos de tipo analógicos que desee cambiar en la placa, por ejemplo setear una salida con "x" voltaje'  },
    { name: 'Variable 3', type: 'switch', description: 'Este tipo de input se refiere a datos de tipo analógicos que desee cambiar en la placa, por ejemplo setear una salida con "x" voltaje'  },
    { name: 'Switch 3', type: 'switch' , description: 'Este tipo de input se refiere a datos de tipo on/off que desee cambiar en la placa, por ejemplo dejar de medir "x" entrada o comenzar a hacerlo'},
  ];
  */

  return (
    <Scaffold>
      {/*
      <div className='flex flex-col sm:flex-row gap-4 mb-5'>
        <ControllerButton icon={faSave} color={'#119542'} label={'Guardar Todo'}/>
        <ControllerButton icon={faRotate} color={'#9B2727'} label={'Restaurar Todo'}/>
        <ToastContainer />
      </div>
      */}
      {controller_sensores.map((c, index) => (
        <Controller
          key={index}
          name={c.name}
          description={c.description}
          type={c.type}
          encendido={c.encendido}
          id_sensor={c.id_sensor}
        />
      ))}
      
    </Scaffold>
  )
}

export default Controllers;
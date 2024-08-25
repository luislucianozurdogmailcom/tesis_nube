import React from 'react'
import { useEffect, useState } from 'react'
import LineChartComponent from './charts/LineChartComponent'
import PieChartComponent from './charts/PieChartComponent'
import BarChartComponent from './charts/BarChartComponents'
import axios from 'axios'
import ApiCall,{medicionesPinActivos} from '../../servicios/ApiCall'
import {query_traer_mediciones, query_mediciones_efectivas, query_medicion_x_sensor_activo} from '../../utils/querys';

const ChartsContainer = () => {
  
  const [data_0, setData_0]                        = useState(null);
  const [data_1, setData_1]                        = useState(null);
  const [data_2, setData_2]                        = useState(null);
  const [data_3, setData_3]                        = useState(null);
  const [data_4, setData_4]                        = useState(null);
  const [data_5, setData_5]                        = useState(null);
  const [data_6, setData_6]                        = useState(null);
  const [data_7, setData_7]                        = useState(null);
  const [data_mediciones_efectivas, setMediciones] = useState(null);
  const [data_medicion_sensor, setMedicionSensor]  = useState(null);
  const [loading, setLoading]                      = useState(true);
  const [error, setError]                          = useState(null);
  
  // Querys para la llamada al servicio directo a la DB
  const query_count             = query_mediciones_efectivas();
  const query_medicion_x_sensor = query_medicion_x_sensor_activo(); 
  
  // Llamadas a los servicios
  useEffect(() => {
    const fetchData = async () => {
        try {
            // Llama a los datos para el piechart
            const result      = await ApiCall(query_count);
            const result_json = result.map(([etiqueta,valor]) => ({etiqueta, valor}));
            setMediciones(result_json);

            // Llama a los datos para el barchart
            const result_2      = await ApiCall(query_medicion_x_sensor);
            const result_json_2 = result_2.map(([etiqueta,valor]) => ({etiqueta, valor}));
            console.log('Datos traidos de la consulta por sensores: ',result_json_2)
            setMedicionSensor(result_json_2)
            
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError(error);
        } finally {
            setLoading(false);
        };
    };
    
    fetchData();
    }, [query_count]);
  
  // Todos los pines analógicos
  useEffect(() => {
      const fetchData = async () => {
          try {
              // Llamadas a la API
              const result_0 = await medicionesPinActivos(0,20); // pin 0
              const result_1 = await medicionesPinActivos(1,20); // pin 1
              const result_2 = await medicionesPinActivos(2,20); // pin 2
              const result_3 = await medicionesPinActivos(3,20); // pin 3
              const result_4 = await medicionesPinActivos(4,20); // pin 4
              const result_5 = await medicionesPinActivos(5,20); // pin 5
              const result_6 = await medicionesPinActivos(6,20); // pin 6
              const result_7 = await medicionesPinActivos(7,20); // pin 7
              
              // Mapeamos la respuesta a Json
              const result_json_0 = result_0.map(([sensor,pin,valor,fecha, unidad]) => ({valor, fecha, sensor, pin, unidad}));
              const result_json_1 = result_1.map(([sensor,pin,valor,fecha, unidad]) => ({valor, fecha, sensor, pin, unidad}));
              const result_json_2 = result_2.map(([sensor,pin,valor,fecha, unidad]) => ({valor, fecha, sensor, pin, unidad}));
              const result_json_3 = result_3.map(([sensor,pin,valor,fecha, unidad]) => ({valor, fecha, sensor, pin, unidad}));
              const result_json_4 = result_4.map(([sensor,pin,valor,fecha, unidad]) => ({valor, fecha, sensor, pin, unidad}));
              const result_json_5 = result_5.map(([sensor,pin,valor,fecha, unidad]) => ({valor, fecha, sensor, pin, unidad}));
              const result_json_6 = result_6.map(([sensor,pin,valor,fecha, unidad]) => ({valor, fecha, sensor, pin, unidad}));
              const result_json_7 = result_7.map(([sensor,pin,valor,fecha, unidad]) => ({valor, fecha, sensor, pin, unidad}));

              // Guardamos los datos en los estados de las variables
              setData_0(result_json_0);
              setData_1(result_json_1);
              setData_2(result_json_2);
              setData_3(result_json_3);
              setData_4(result_json_4);
              setData_5(result_json_5);
              setData_6(result_json_6);
              setData_7(result_json_7);

              //console.log('Datos recibidos de la API y cargados en data_0', result_json_0);
          } catch (error) {
              console.error('Error al obtener los datos:', error);
              setError(error);
          } finally {
              setLoading(false);
          };
      };

      fetchData();
      }, [query_count]);
  
  // Función para chequear que ha llegado información en todos los set de datos
  const createDataProof = (dataArray) => {
    // Filtramos los datos que no son nulos y tienen un largo mayor a cero
    const validDataArray = dataArray.filter(data => data && data.length > 0);
  
    // Creamos el array de objetos JSON solo con los datos válidos
    return validDataArray.map(data => ({
      data : data,
      title: data[0]['sensor'],
      units: data[0]['unidad']
    }));
  };
  
  // Usamos la función para crear dataProof
  const dataProof = createDataProof([data_0, data_1, data_2, data_3, data_4, data_5, data_6, data_7]);


  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      {
      <div className="col-span-12 xl:col-span-7">
        <BarChartComponent 
          title={'Cantidad de mediciones realizadas por sensor'} 
          data={data_medicion_sensor} 
          dataKeys={['etiqueta','valor']} 
          description={'Contabilizamos la cantidad de mediciones que se han realizado por cada uno de los sensores disponibles y activos'}/>
      </div>
      }

      <div className="col-span-12 xl:col-span-5">
        <PieChartComponent 
          title={'Mediciones totales efectivas vs mediciones en cero'} 
          data={data_mediciones_efectivas} 
          dataKeys={['etiqueta','valor']} 
          description={'Grafico de torta, se puede ver la cantidad de mediciones que dieron mayores a cero vs todas las mediciones'}/>
      </div>
      
      {dataProof.map((chart, index) => (
        <div key={index} className={`w-full ${index === 0 && dataProof.length % 2 !== 0 ? 'xl:col-span-12 col-span-12' : '2xl:col-span-4 xl:col-span-6 col-span-12'} ${index !== 0 && 'col-span-12 xl:col-span-6 2xl:col-span-4'}`}>
          <LineChartComponent 
            data={chart.data} 
            dataKeys={['fecha','valor']} 
            title={chart.title}
            units={chart.units} 
            description={'Grafico de lineas, mide voltaje vs Tiempo'}/>
        </div>
      ))}
      

      

    </div>
  );
}

export default ChartsContainer;
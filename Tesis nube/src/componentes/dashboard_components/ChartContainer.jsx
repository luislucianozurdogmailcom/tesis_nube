import React from 'react'
import { useEffect, useState } from 'react'
import LineChartComponent from './charts/LineChartComponent'
import PieChartComponent from './charts/PieChartComponent'
import BarChartComponent from './charts/BarChartComponents'
import axios from 'axios'
//import ApiCall from '../../servicios/ApiCall'

const ApiCall = async (query) => {
  try {
      const response = await fetch(`https://62bwhyuxp6.execute-api.us-east-2.amazonaws.com/prod/lanzarQuery?query=${query}`, {
          method: 'GET',
          mode: 'cors',
          headers: {
              //'secret'       : 'ungs123', // Corregido: 'Authorization' en lugar de 'Authentication'
              //'client_id'    : 'administrador',
              'Content-Type' : 'application/json',
          },
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error en la llamada a la API:', error);
      throw error;
  }
};


const ChartsContainer = () => {
  
  const [data, setData]       = useState(null);
  const [data_2, setData_2]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  
  const query = `
  select
  	valor,
  	fecha::varchar
  from
  	mediciones
  where valor > 0
  order by id_medicion desc 
  limit 20`;

  const query_count = `
  with a as (
    select
      'mediciones efectivas' as etiqueta,
      sum(
         case when valor > 0.01 then 1
         else 0 end 
       ) as valor
     from
       mediciones
     ),
  b as (
   select
      'mediciones en cero' as etiqueta,
      count(valor) - sum(
         case when valor > 0.01 then 1
         else 0 end 
       ) as valor
     from
       mediciones
    )
  select * from a
  union all
  select * from b
  `
  useEffect(() => {
    const fetchData = async () => {
        try {
            const result      = await ApiCall(query_count);
            const result_json = result.map(([etiqueta,valor]) => ({etiqueta, valor}));
            //console.log('Datos recibidos de la API:', result_json);
            setData_2(result_json);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError(error);
        } finally {
            setLoading(false);
        };
    };
    
    fetchData();
    }, [query_count]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const result      = await ApiCall(query);
              const result_json = result.map(([valor,fecha]) => ({valor, fecha}));
              //console.log('Datos recibidos de la API:', result_json);
              setData(result_json);
          } catch (error) {
              console.error('Error al obtener los datos:', error);
              setError(error);
          } finally {
              setLoading(false);
          };
      };

      fetchData();
      }, [query]);

  

  const dataProof = [
    { data: data, title: 'Mediciones' },
    //{ data: data_2, title: 'Titulo 2' },
    //{ data: data3, title: 'Titulo 3' },
    //{ data: data, title: 'Titulo 4' },
    //{ data: data2, title: 'Titulo 5' },
  ];


  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
      
      
      {dataProof.map((chart, index) => (
        <div key={index} className={`w-full lg:${index === 0 && dataProof.length % 2 !== 0 ? 'col-span-10 sm:col-span-10' : 'col-span-5'} ${index !== 0 && 'sm:col-span-10'}`}>
          <LineChartComponent 
            data={chart.data} 
            dataKeys={['fecha','valor']} 
            title={chart.title} 
            description={'Grafico de lineas, mide voltaje vs Tiempo'}/>
        </div>
      ))}
      
      <div className="xl:col-span-3 sm:col-span-10">
        <PieChartComponent 
          title={'Gráfico de mediciones realizadas'} 
          data={data_2} 
          dataKeys={['etiqueta','valor']} 
          description={'Grafico de torta, aca podemos ver la cantidad de mediciones que dieron mayores a cero vs todas las mediciones'}/>
      </div>
      
      <div className="xl:col-span-7 sm:col-span-10">
        <BarChartComponent 
          title={'Gráfico de barras'} 
          data={data} 
          dataKeys={['fecha','valor']} 
          description={'Grafico de barras, mide voltaje vs Tiempo'}/>
      </div>
      {/*
      */}
    </div>
  );
}

export default ChartsContainer;
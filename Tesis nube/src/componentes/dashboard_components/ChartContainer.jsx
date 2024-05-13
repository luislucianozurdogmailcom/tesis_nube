import React from 'react'
import { useEffect, useState } from 'react'
import LineChartComponent from './charts/LineChartComponent'
import PieChartComponent from './charts/PieChartComponent'
import BarChartComponent from './charts/BarChartComponents'
import axios from 'axios'

const ChartsContainer = () => {

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [dataKeys, setDataKeys] = useState(['fecha', 'valor']);

  useEffect(() => {

    // Traemos datos de avg
    const fetchData = async (campo_1, campo_2, esquema, page, pageSize, setMethod) => { // Marcar la función como asincrónica

      const url = `https://us-central1-paneles-solares-ungs.cloudfunctions.net/getValues?campo_1=${campo_1}&campo_2=${campo_2}&esquema=${esquema}&page=${page}&pageSize=${pageSize}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          // Invertimos el órden para dejar el ultimo dato a la derecha del gráfico
          setMethod(response.data.reverse());
          setDataKeys(Object.keys(data[0]))
        } else {
          // Hacer algo en caso de error
        }
      } catch (error) {
        console.error('An error occurred while sending the request:', error);
      }
    };

    fetchData('fecha', 'valor', 'mediciones', '1', '4', setData);
    fetchData('fecha', 'valor', 'mediciones', '1', '4', setData2);
    fetchData('fecha', 'valor', 'mediciones', '1', '2', setData3);
  }, []);

  const dataProof = [
    { data: data, title: 'Titulo 1' },
    { data: data2, title: 'Titulo 2' },
    { data: data3, title: 'Titulo 3' },
    { data: data, title: 'Titulo 4' },
    { data: data2, title: 'Titulo 5' },
  ];


  return (
    <div className="grid lg:grid-cols-10 grid-cols-1 gap-10">
      {dataProof.map((chart, index) => (
        <div key={index} className={`w-full lg:${index === 0 && dataProof.length % 2 !== 0 ? 'col-span-10' : 'col-span-5 lg:col-span-5'} ${index !== 0 && 'lg:col-span-5 sm:col-span-10'}`}>
          <LineChartComponent data={chart.data} dataKeys={dataKeys} title={chart.title} />
        </div>
      ))}
      <div className="xl:col-span-3 sm:col-span-10">
        <PieChartComponent title={'Titulo 3'} data={data3} dataKeys={dataKeys} />
      </div>
      <div className="xl:col-span-7 sm:col-span-10">
        <BarChartComponent title={'Titulo 4'} data={data} dataKeys={dataKeys} />
      </div>
    </div>
  );
}

export default ChartsContainer;
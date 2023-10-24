import React from 'react'
import { useEffect, useState } from 'react'
import LineChartComponent from './LineChartComponent'
import PieChartComponent from './PieChartComponent'
import axios from 'axios'
import BarChartComponent from './BarChartComponents'

const LineChartContainer = () => {

  const [data, setData]         = useState([]);
  const [data2, setData2]       = useState([]);
  const [dataKeys, setDataKeys] = useState(['fecha','valor']);

  useEffect(() => {

    // Traemos datos de avg
    const fetchData = async (campo_1,campo_2,esquema,page,pageSize,setMethod) => { // Marcar la función como asincrónica
      
      const url = `https://us-central1-paneles-solares-ungs.cloudfunctions.net/getValues?campo_1=${campo_1}&campo_2=${campo_2}&esquema=${esquema}&page=${page}&pageSize=${pageSize}`;

      try {
        const response = await axios.get(url);
        
        if (response.status === 200) {
          setMethod(response.data);
          setDataKeys(Object.keys(data[0]))
        } else {
          // Hacer algo en caso de error
        }
      } catch (error) {
        console.error('An error occurred while sending the request:', error);
      }
    };
    
    fetchData('fecha','valor','mediciones','1','10',setData);
    fetchData('fecha','valor','mediciones','1','20',setData2);
  },[]);

  return (
    <div className='grid lg:grid-cols-4 grid-cols-2 m-4'>
        <div className='p-4 col-span-2'>
            <LineChartComponent title={'Titulo 1'} data={data} dataKeys={dataKeys}/>
        </div>
        <div className='p-4 col-span-2'>
            <LineChartComponent title={'Titulo 2'} data={data2} dataKeys={dataKeys}/>
        </div>
        <div className='p-4 col-span-2'>
          <PieChartComponent />
        </div>
        <div className='p-4 col-span-2'>
          <BarChartComponent data={data} dataKeys={dataKeys}/>
        </div>
    </div>
  )
}

export default LineChartContainer
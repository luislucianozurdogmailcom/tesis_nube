import React from 'react';
import { useEffect, useState } from 'react';
import ChartContainer from '../ChartElements';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const PieChartComponent = ({ data, dataKeys, title, description}) => {

  /*
  const data = [
    { name: 'Nodo 1', value: 40 },
    { name: 'Nodo 2', value: 30 },
    { name: 'Nodo 3', value: 20 },
    { name: 'Nodo 4', value: 800 },
  ];
  */
  const COLORS = ['#8a4f7d', '#c0c3e5', '#9b5fb6', '#a18cd1'];

  const legend = [
    { color: '#8a4f7d', variable: 'Mediciones Efectivas' },
    { color: '#c0c3e5', variable: 'Mediciones en Cero' },
  ]; 

  // Verificar si los datos están disponibles antes de renderizar el componente
  if (!data || data.length === 0) {
    return <div>Loading...</div>; // O mostrar un mensaje de carga
  }

  return (
    <>
      <ChartContainer
        title={title}
        legend={legend}
        description={description}
        height={400}
      >
        <PieChart >
          <Pie
            data={data}
            dataKey="valor"//{dataKeys[0]} //"valor"
            nameKey="etiqueta"//{dataKeys[1]} //"fecha"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            
            {data && data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            
          </Pie>
          <Tooltip itemStyle={{ color: '#ffffff' }} contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#ffffff', borderRadius: 12}} />
        </PieChart>
      </ChartContainer>
    </>
  )
}

export default PieChartComponent
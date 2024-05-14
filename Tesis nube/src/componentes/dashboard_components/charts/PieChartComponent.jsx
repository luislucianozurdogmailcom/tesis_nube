import React from 'react';
import { useEffect, useState } from 'react';
import ChartContainer from '../ChartElements';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const PieChartComponent = ({ data, dataKeys, title }) => {

  /*
  const data = [
    { name: 'Nodo 1', value: 40 },
    { name: 'Nodo 2', value: 30 },
    { name: 'Nodo 3', value: 20 },
    { name: 'Nodo 4', value: 800 },
  ];
  */
  const COLORS = ['#8a4f7d', '#9b5fb6', '#a18cd1', '#c0c3e5'];

  const legend = [
    { color: '#FF0000', variable: 'Var 1' },
    { color: '#00FF00', variable: 'Var 2' },
  ]; 

  return (
    <>
      <ChartContainer
        title={title}
        legend={legend}
        description={'Lore iusmod tempor incididunt ut l'}
      >
        <PieChart >
          <Pie
            data={data}
            dataKey="valor"
            nameKey="fecha"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
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
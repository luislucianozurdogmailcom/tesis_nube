import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const PieChartComponent = () => {

  const data = [
    { name: 'Nodo 1', value: 40 },
    { name: 'Nodo 2', value: 30 },
    { name: 'Nodo 3', value: 20 },
    { name: 'Nodo 4', value: 800 },
  ];
  
  const COLORS = ['#8a4f7d', '#9b5fb6', '#a18cd1', '#c0c3e5'];
  
  return (
    <div className='w-full p-4 bg-white rounded-2xl flex items-center justify-center'>
      <div style={{ width: '100%', maxWidth: '400px' }}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
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
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
    </div>
  )
}

export default PieChartComponent
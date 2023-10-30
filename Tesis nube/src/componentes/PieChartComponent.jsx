import React from 'react'
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
  
  return (
    <div className="w-full p-4 bg-white rounded-2xl">
          <h2 className="text-2xl text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-light mb-4">
              {title}
          </h2>
          <div style={{ width: '100%', height: 380 }} className='bg-white rounded-xl pb-2 pt-4 pr-8 pl-2'>
                <PieChart width={400} height={400}>
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
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
    </div>
    

  )
}

export default PieChartComponent
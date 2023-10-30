import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data, dataKeys, title }) => {

    const data2 = [
        { name: 'A', value: 100 },
        { name: 'B', value: 200 },
        { name: 'C', value: 300 },
        { name: 'D', value: 400 },
      ];

  // Verificar si los datos están disponibles antes de renderizar el componente
  if (!data || data.length === 0) {
      return <div>Loading...</div>; // O mostrar un mensaje de carga
  }

  return (
      <div className="w-full p-4 bg-white rounded-2xl">
          <h2 className="text-2xl text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-light mb-4">
              {title}
          </h2>
          <div style={{ width: '100%', height: 380 }} className='bg-white rounded-xl pb-2 pt-4 pr-8 pl-2'>
              <ResponsiveContainer>
                  <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="fecha" />
                      <YAxis dataKey="valor" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="valor" fill="#8884d8" />
                  </BarChart>
              </ResponsiveContainer>
          </div>
      </div>
  );
};

export default BarChartComponent;

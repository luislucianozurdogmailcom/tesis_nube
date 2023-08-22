import React,{ useRef, useEffect, useState} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LineChartComponent = () => {

  const chartContainerRef                   = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (chartContainerRef.current) {
      setContainerWidth(chartContainerRef.current.offsetWidth);
      console.log(containerWidth)
    }
  }, []);

  const data = [
    { name: 'Enero', Ventas: 12 },
    { name: 'Febrero', Ventas: 19 },
    { name: 'Marzo', Ventas: 3 },
    { name: 'Abril', Ventas: 5 },
    { name: 'Mayo', Ventas: 2 },
    { name: 'Junio', Ventas: 25}
  ];
  
  const hueStart  = 250; // Hue value for red color
  const hueEnd    = 30;
  const hexStart = '#9C5DF6'; // Hexadecimal value for red color
  const hexEnd = '#3B84F5';   // Hexadecimal value for green color


  const handleResize = () => {
    if (chartContainerRef.current) {
      setContainerWidth(chartContainerRef.current.offsetWidth);
    }
  };

  return (
    <div className="w-full p-4 bg-white rounded-2xl">
      <h2 className="text-2xl text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-light mb-4">
        Gráfico de Área Responsivo con Gradiente de Color Personalizado
      </h2>
      <div className="w-full h-54" ref={chartContainerRef}>
        <ResponsiveContainer width="100%" height={300} onResize={handleResize}>
          <AreaChart width={containerWidth} data={data}>
            <defs>
              <linearGradient id="colorGradientCustom" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={hexStart} />
                <stop offset="100%" stopColor={hexEnd} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="Ventas"
              stroke="none"
              fill="url(#colorGradientCustom)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;

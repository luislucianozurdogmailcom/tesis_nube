import React from 'react';
import ChartContainer from '../ChartElements';
import { AreaChart, XAxis, YAxis, Tooltip, Area, Label } from 'recharts';

const LineChartComponent = ({ data, dataKeys, title, description, units}) => {
  const hexStart = '#F99FBA'; // Hexadecimal value for red color
  const hexEnd = '#3B84F5'; // Hexadecimal value for green color 

  const legend = [
  //  { color: '#FF0000', variable: 'Var 1' },
  //  { color: '#00FF00', variable: 'Var 2' }, 
  ];

  // Componente personalizado para los ticks del eje X
  const CustomTick = ({ x, y, payload }) => {
    const lines = payload.value.split(' ').reduce((acc, word) => {
        const lastLine = acc[acc.length - 1];
        if (lastLine && lastLine.join(' ').length + word.length <= 5) { // Ajusta el número 10 según sea necesario
            lastLine.push(word);
        } else {
            acc.push([word]);
        }
        return acc;
    }, []).map(line => line.join(' '));
      return (
          <g transform={`translate(${x},${y})`}>
              {lines.map((line, index) => (
                  <text
                      key={index}
                      x={0}
                      y={index * 15} // Ajusta el valor 12 según sea necesario para el espaciado entre líneas
                      textAnchor="middle"
                      dy={20}
                      angle={90}
                      fill="#ffffff"
                      fontSize="12px" // Ajusta el tamaño del texto según sea necesario
                  >
                      {line}
                  </text>
              ))}
          </g>
      );
  };

  return (
    <> 
      <ChartContainer 
        title={title} 
        legend={legend} 
        description={description}
        height={260}
      >
        <AreaChart 
          data={data} 
          margin={{ bottom: 60,left:40 }}
        >
          <defs>
            <linearGradient 
              id="colorGradientCustom" 
              x1="0" 
              y1="0" 
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={hexStart} />
              <stop offset="100%" stopColor={hexEnd} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey={dataKeys[0]} 
            angle={90} 
            textAnchor="start"
            stroke='#ffffff' 
            strokeWidth={1} 
            interval={4}
            tick={CustomTick}
          >
            <Label 
              value="Fecha" 
              fill="#ffffff" 
              dy={50} 
              offset={20} 
              className={`hidden md:block text-white font-semibold`} 
            />
          </XAxis>
          <YAxis 
            dataKey={dataKeys[1]}
            stroke='#ffffff' 
            strokeWidth={1}
          >
            <Label 
              value={units} 
              angle={-90} 
              dx={-60} 
              fill="#ffffff" 
              className={`hidden md:block text-white font-semibold`} 
            />
          </YAxis> 
          <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#ffffff', borderRadius: 12}}/>
          <Area
            type="monotone"
            dataKey={dataKeys[1]}
            stroke="none"
            fill="url(#colorGradientCustom)"
          />
        </AreaChart>
      </ChartContainer>
    </>
  );
};

export default LineChartComponent;
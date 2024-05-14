import React from 'react';
import ChartContainer from '../ChartElements';
import { AreaChart, XAxis, YAxis, Tooltip, Area, Label } from 'recharts';

const LineChartComponent = ({ data, dataKeys, title }) => {
  const hexStart = '#F99FBA'; // Hexadecimal value for red color
  const hexEnd = '#3B84F5'; // Hexadecimal value for green color 

  const legend = [
    { color: '#FF0000', variable: 'Var 1' },
    { color: '#00FF00', variable: 'Var 2' }, 
  ];

  return (
    <> 
      <ChartContainer 
        title={title} 
        legend={legend} 
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
      >
        <AreaChart 
          data={data} 
          margin={{ bottom: 20 }}
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
            stroke='#ffffff' 
            strokeWidth={1} 
          >
            <Label 
              value="Nombre Eje" 
              fill="#ffffff" 
              dy={25} 
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
              value="Nombre Eje" 
              angle={-90} 
              dx={-20} 
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
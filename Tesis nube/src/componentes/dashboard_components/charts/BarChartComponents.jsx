import React from 'react';
import ChartContainer from '../ChartElements';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const BarChartComponent = ({ data, dataKeys, title, description}) => {

    const data2 = [
        { name: 'A', value: 100 },
        { name: 'B', value: 200 },
        { name: 'C', value: 300 },
        { name: 'D', value: 400 },
    ];

    // Verificar si los datos están disponibles antes de renderizar el componente
    if (!data || data.length === 0) {
        return <div>...Loading...</div>; // O mostrar un mensaje de carga
    }

    const legend = [
    //    { color: '#FF0000', variable: 'Var 1' },
    //    { color: '#00FF00', variable: 'Var 2' },
    ];

    // Componente personalizado para los ticks del eje X
    const CustomTick = ({ x, y, payload }) => {
        const lines = payload.value.split(' ').reduce((acc, word) => {
            const lastLine = acc[acc.length - 1];
            if (lastLine && lastLine.join(' ').length + word.length <= 8) { // Ajusta el número 10 según sea necesario
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
                        fill="#ffffff"
                        fontSize="15px" // Ajusta el tamaño del texto según sea necesario
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
                height={400}
            >
                <BarChart data={data} margin={{ bottom: 90 }}>
                    <XAxis
                        dataKey="etiqueta"
                        stroke='#ffffff'
                        strokeWidth={1}
                        angle={0} 
                        textAnchor="start"
                        interval={0}
                        style={{ fontSize: '20px' }}
                        tick={CustomTick} // Aplicar el formateador
                    >
                        <Label
                            value="Sensores"
                            fill="#ffffff"
                            dy={95}
                            offset={20}
                        />
                    </XAxis>
                    <YAxis
                        dataKey="valor"
                        stroke='#ffffff'
                        strokeWidth={1}
                    >
                        <Label
                            value="Mediciones realizadas"
                            angle={-90}
                            dx={-25}
                            fill="#ffffff"
                        />
                    </YAxis>
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#ffffff', borderRadius: 12 }} />
                    <Bar dataKey="valor" fill="#8884d8" />
                </BarChart>
            </ChartContainer>
        </>
    );
};

export default BarChartComponent; 
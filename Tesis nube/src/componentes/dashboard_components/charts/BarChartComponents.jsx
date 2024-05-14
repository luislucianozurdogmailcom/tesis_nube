import React from 'react';
import ChartContainer from '../ChartElements';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

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
                <BarChart data={data} margin={{ bottom: 15 }}>
                    <XAxis
                        dataKey="fecha"
                        stroke='#ffffff'
                        strokeWidth={1}
                    >
                        <Label
                            value="Nombre Eje"
                            fill="#ffffff"
                            dy={20}
                            offset={20}
                        />
                    </XAxis>
                    <YAxis
                        dataKey="valor"
                        stroke='#ffffff'
                        strokeWidth={1}
                    >
                        <Label
                            value="Nombre Eje"
                            angle={-90}
                            dx={-20}
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
import React, { useRef, useEffect, useState } from 'react';
import { ResponsiveContainer } from 'recharts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCircle } from '@fortawesome/free-solid-svg-icons';

const ChartTitle = ({ title, description }) => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsTooltipOpen(true);
    };

    const handleMouseLeave = () => {
        setIsTooltipOpen(false);
    };

    return (
        <div className="flex items-center mb-10" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="mx-2 mr-3">
                <FontAwesomeIcon icon={faCircleInfo} style={{ color: '#FFFFFF', height: 20 }} />
            </div>
            <h2 className="text-xl text-left text-white bg-clip-text font-medium">{title}</h2>
            {isTooltipOpen && (
                <div className="absolute text-white py-2 px-4 rounded-xl shadow lg:w-80 md:w-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>{description}</div>
            )}
        </div>
    );
}

const ChartLegend = ({ items }) => {
    return (
        <div className="hidden md:block flex items-center justify-center">
            {items.map((item, index) => (
                <div key={index} class="flex items-start">
                    <div className="mx-2 mr-3">
                        <FontAwesomeIcon icon={faCircle} style={{ color: item.color, height: 10 }} />
                    </div>
                    <p class="text-white text-sm">{item.variable}</p>
                </div>
            ))}
        </div>
    );
}

const ChartContainer = ({ children, title, legend, description, height}) => {
    const chartContainerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateContainerWidth = () => {
            if (chartContainerRef.current)
                setContainerWidth(chartContainerRef.current.offsetWidth);
        };
        updateContainerWidth();
        window.addEventListener('resize', updateContainerWidth);
        return () => window.removeEventListener('resize', updateContainerWidth);
    }, []);

    return (
        <div className='bg-[#2D305B] px-10 py-8 col-span-2 rounded-2xl'>
            <ChartTitle title={title} description={description}/>
            <div className="w-full p-2 rounded-2x1 rounded-lg">
                <div className="w-full h-54" ref={chartContainerRef}>
                    <div className='flex'>
                        <ResponsiveContainer width="100%" height={height}>{children}</ResponsiveContainer>
                        <ChartLegend items={legend} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartContainer;
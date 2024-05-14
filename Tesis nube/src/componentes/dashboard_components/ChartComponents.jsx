import React, { useRef, useEffect, useState } from 'react';
import { ResponsiveContainer } from 'recharts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCircle } from '@fortawesome/free-solid-svg-icons';

const ChartTitle = ({ title }) => {
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
                <div className="absolute text-white py-2 px-4 rounded shadow lg:w-80 md:w-50" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
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

const ChartDescription = ({ description }) => {
    return (
        <div className="hidden md:block flex items-center justify-center pt-4 pl-16">
            <p className="text-white text-sm">{description}</p>
        </div>
    );
}

const ChartContainer = ({ children, title, legend, description }) => {
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
        <div className='px-10 py-8 col-span-2 rounded-3xl' style={{ backgroundColor: '#2D305B' }}>
            <ChartTitle title={title} />
            <div className="w-full p-2 rounded-2x1 rounded-lg">
                <div className="w-full h-54 mb-5" ref={chartContainerRef}>
                    <div className='flex'>
                        <ResponsiveContainer width="100%" height={260}>{children}</ResponsiveContainer>
                        <ChartLegend items={legend}/>
                    </div>
                    <ChartDescription description={description}/>
                </div>
            </div>
        </div>
    );
};

export default ChartContainer;
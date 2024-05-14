import React from 'react';
import { useState } from 'react';
import KPIContainer from './kpi/KPIContainer';
import NavBar from '../navbar_components/Navbar';

// Redux
import { useSelector } from "react-redux";
import Footer from './Footer';

const Scaffold = ({ children, fixKPI }) => {

    const [isExpanded, setIsExpanded] = useState(false); // Nuevo estado para la expansión del Navbar

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='flex w-screen' style={{ backgroundColor: '#202344' }}>
            <NavBar isExpanded={isExpanded} toggleExpanded={toggleExpanded} /> 
            <div className='flex flex-col px-10 pt-5'>
                <KPIContainer fixKPI={fixKPI} />
                {children}
                <div className='mt-auto'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Scaffold; 
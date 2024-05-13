import React from 'react';
import {useState} from 'react'; 
import Indicators from './Indicators';
import NavBar from './navbar_components/Navbar';

// Redux
import { useSelector } from "react-redux";
import Footer from './Footer';

const Scaffold = ({ children }) => {

    const [isExpanded, setIsExpanded] = useState(false); // Nuevo estado para la expansión del Navbar

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='flex w-screen' style={{ backgroundColor: '#202344' }}>
            <NavBar isExpanded={isExpanded} toggleExpanded={toggleExpanded} />
            {/*Body*/}
            <div className='flex flex-col px-10 pt-10'>
                <Indicators titulo_pagina={'Analytics'} />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default Scaffold;


/* return (
    <div className='flex flex-row h-full w-screen overlfow-hidden'>
        <Navbar />
        <ButtonNavBar />
        <div className={isOpen ? 'hidden' : 'h-full w-12'}></div>
        <div className={isOpen ? 'w-10/12 h-full bg-gray-200' : 'w-12/12 h-full bg-gray-200'}  style={{background: '#202344'}}>
            <Indicators titulo_pagina={'Analytics'} />
            {children}
        </div>
    </div>
) */
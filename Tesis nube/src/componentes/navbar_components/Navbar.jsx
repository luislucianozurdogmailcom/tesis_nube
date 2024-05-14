/* import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faChartGantt, faCircleNodes, faCircleQuestion, faDatabase} from '@fortawesome/free-solid-svg-icons'
import {faGear, faArrowLeft} from '@fortawesome/free-solid-svg-icons' */

// Redux
/* import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../reducers/sideBar"; // Asegúrate de importar el slice correcto

const Navbar = () => {

  const dispatch = useDispatch();
  const isOpen   = useSelector((state) => state.sideBar.isOpen); // Accede al valor isOpen desde el estado


  const toggleSidebar = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className={isOpen ? "fixed h-screen lg:w-2/12 w-3/12 bg-gradient-to-b from-violet-500 to-blue-500 text-white flex flex-col slide-out-right" : "hidden"} >
      <div className="p-4 bg-violet-800 flex justify-center mb-4">
        <h1 className="text-white text-xl font-bold">Proyecto UNGS</h1>
      </div>
      <ul className="py-4 flex-1">
        <a href='/'><li className="py-4 pl-6 hover:bg-white hover:text-slate-700"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> &nbsp;  Home </li></a>
        <a href='/Analytics'><li className="py-4 pl-6 hover:bg-white hover:text-slate-700"><FontAwesomeIcon icon={faChartGantt} /> &nbsp; Analytics</li></a>
        <a href='/Seteo'><li className="py-4 pl-6 hover:bg-white hover:text-slate-700"><FontAwesomeIcon icon={faCircleNodes} /> &nbsp; Seteo</li></a>
        <li className="py-4 pl-6 hover:bg-white hover:text-slate-700"><FontAwesomeIcon icon={faCircleQuestion} /> &nbsp; Help</li>
        <li className="py-4 pl-6 hover:bg-white hover:text-slate-700"><FontAwesomeIcon icon={faDatabase} /> &nbsp; DQuery</li>
        <a href='/Settings'><li className="py-4 pl-6 hover:bg-white hover:text-slate-700"><FontAwesomeIcon icon={faGear} /> &nbsp;Settings</li></a>
      </ul>
      <div className='h-32 flex flex-row justify-end'>
        <div className='h-14 w-10 bg-white rounded-l-3xl pl-2 text-slate-700 text-2xl flex flex-row items-center justify-center'>
          <FontAwesomeIcon onClick={toggleSidebar} icon={faArrowLeft} />
        </div>
      </div>
      <div className='w-full h-72'></div>
    </div>
    
  )
}

export default Navbar */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faAngleLeft, faAngleRight, faWrench, faDatabase, faGear, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import UngsLogo from './UngsLogo';
import NavBarButton from './NavBarButton';

const NavBar = ({ isExpanded, toggleExpanded }) => {
  const topButtons = [
    { to: '/', label: 'Home', icon: faHome },
    { to: '/Analytics', label: 'Dashboard', icon: faChartBar },
    { to: '/Seteo', label: 'Controllers', icon: faWrench },
    { to: '/', label: 'DQuery', icon: faDatabase },
  ];

  const bottomButtons = [
    { to: '/Settings', label: 'Settings', icon: faGear },
    { to: '/', label: 'Help', icon: faCircleInfo },
  ];

  return (
    <div className='flex flex-col rounded-r-2xl' style={{ background: '#2D305B' }}>
      <div className="sticky top-0" style={{ width: isExpanded ? 200 : 120 }}>
        <UngsLogo isExpanded={isExpanded} />
        {topButtons.map((button, index) => (
          <NavBarButton
            key={index}
            isExpanded={isExpanded}
            to={button.to}
            label={button.label}
            icon={button.icon}
            isSelected={window.location.pathname === button.to}
          />
        ))}
        <div className='sm:h-72' />
        {bottomButtons.map((button, index) => (
          <NavBarButton
            key={index}
            isExpanded={isExpanded}
            to={button.to}
            label={button.label}
            icon={button.icon}
            isSelected={window.location.pathname === button.to}
          />
        ))}
        <div className='flex items-center justify-start rounded-l-3xl'>
          <button className="text-white text-white p-4 items-center " onClick={toggleExpanded}>
            {isExpanded ? <FontAwesomeIcon icon={faAngleLeft} /> : <FontAwesomeIcon icon={faAngleRight} />}
          </button>
        </div> 
      </div>
    </div>
  );
};

export default NavBar; 
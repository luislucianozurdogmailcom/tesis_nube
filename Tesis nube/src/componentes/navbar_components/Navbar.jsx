import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faAngleLeft, faAngleRight, faWrench, faDatabase, faGear, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import NavBarButton from './NavBarButton';

import Logo from '../../assets/Logo.png';

const UngsLogo = ({ isExpanded }) => {
  return (
    <div className='flex items-center justify-center flex-row'>
      <img src={Logo} className='my-10' alt='Logo' style={{ width: 30, height: 30 }} />
      <div className={`text-sm text-left text-white pl-3  ${isExpanded ? 'block' : 'hidden'}`}>
        Universidad Nacional <br /> General Sarmiento
      </div>
    </div>
  );
}

const NavBar = ({ isExpanded, toggleExpanded }) => {
  const topButtons = [
    { to: '/', label: 'Home', icon: faHome },
    { to: '/Dashboard', label: 'Dashboard', icon: faChartBar },
    { to: '/Controllers', label: 'Controllers', icon: faWrench },
    { to: '/', label: 'DQuery', icon: faDatabase },
  ];

  const bottomButtons = [
    { to: '/Settings', label: 'Settings', icon: faGear },
    { to: '/', label: 'Help', icon: faCircleInfo },
  ];

  return (
    <div className='sticky top-0 h-screen bg-[#2D305B] rounded-r-2xl'>
      <div className='justify-between h-full flex flex-col ' style={{ width: isExpanded ? 200 : 120 }}>
        <UngsLogo isExpanded={isExpanded} />
        <div>
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
        </div>
        <div className='h-72' /> 
        <div>
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
        </div>
        <div className='flex items-center justify-center rounded-l-3xl'>
          <button className="text-white text-white p-4 items-center " onClick={toggleExpanded}>
            {isExpanded ? <FontAwesomeIcon icon={faAngleLeft} /> : <FontAwesomeIcon icon={faAngleRight} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar; 
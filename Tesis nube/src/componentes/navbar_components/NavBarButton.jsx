import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RoundedCorner = ({ isSelected, rBorder, hBorders }) => {
    return (
        <div className='bg-[#2D305B] flex expanded justify-end'>
            <div className={`${isSelected ? 'bg-[#202344]' : 'bg-[#2D305B]'} rounded-${hBorders}-full rounded-${rBorder}r-xl w-2 h-2`}>
                <div className={`bg-[#2D305B] expanded rounded-${rBorder}r-xl w-full h-full`}/>
            </div>
        </div>
    );
};

const NavBarButton = ({ to, label, icon, isExpanded, isSelected }) => {

    return (
        <Link to={to} className='bg-[#2D305B]'>
            <RoundedCorner isSelected={isSelected} hBorders={'t'} rBorder={'b'} />
            <div className={`${isSelected ? 'bg-[#202344]' : ''} flex ml-6 pr-6 py-4 items-center ${isExpanded ? 'pl-6 justify-start' : 'justify-center'} rounded-l-3xl`}>
                <FontAwesomeIcon icon={icon} style={{ height: 28, color: 'white' }} />
                <div className={`pl-5 text-md text-white hover:text-white ${isExpanded ? 'block' : 'hidden'}`}>
                    {label}
                </div>
            </div>
            <RoundedCorner isSelected={isSelected} hBorders={'b'} rBorder={'t'} />
        </Link>
    );
}

export default NavBarButton;
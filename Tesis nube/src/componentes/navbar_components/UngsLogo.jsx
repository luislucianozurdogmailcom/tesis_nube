import React, { useState } from 'react'; 

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

export default UngsLogo;
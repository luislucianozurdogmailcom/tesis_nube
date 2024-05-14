import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Linkedin from '../../assets/linkedin.svg'
import Phone from '../../assets/phone.svg'
import Email from '../../assets/email.svg'
import Logo from '../../assets/Logo.png'

import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Copyright = () => {
    return (
        <div className='flex-1 text-white flex items-center'>
            <FontAwesomeIcon icon={faCopyright} className='pr-4' style={{ color: 'white', height: 25 }} />
            2024 Luciano Zurdo
        </div>
    );
}

const ContactButtons = () => {
    const contacts = [
        { name: Linkedin, link: '' },
        { name: Phone, link: '' },
        { name: Email, link: '' },
    ];

    return (
        <div className='flex-1 flex justify-end items-center text-gray-200'>
            {contacts.map((contact, index) => (
                <div key={index} className='w-5 mx-3'>
                    <img src={contact.name} alt={contact.name} />
                </div>
            ))}
        </div>
    );
}

const FooterLogo = () => {
    return (
        <div className='flex-1 text-gray-200 flex justify-center'> 
            <img src={Logo} alt='Logo' className='w-10 h-10 lg:w-12 lg:h-12 mr-3 hidden lg:block'/> 
            <div className='mx-2 text-left hidden lg:block'> 
                Universidad Nacional <br></br>
                General Sarmiento
            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <div className='rounded-t-2xl p-6 flex mt-10' style={{ backgroundColor: '#2D305B' }}>
            <Copyright />
            <FooterLogo />
            <ContactButtons />
        </div>
    )
}

export default Footer
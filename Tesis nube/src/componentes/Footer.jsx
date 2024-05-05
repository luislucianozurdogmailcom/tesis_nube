import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Linkedin from '../assets/linkedin.svg'
import Phone from '../assets/phone.svg'
import Email from '../assets/email.svg'
import Logo from '../assets/images.svg'

const Footer = () => {
  return (
    <div className='bg-indigo-900 rounded-t-xl p-6 mx-8 flex'>
        <div className='flex-1 text-gray-200 flex items-center'>
            <div className='w-9 text-center font-bold text-indigo-900 rounded-full mx-2 text-3xl bg-gray-200'>
                ©
            </div>
            2024 Luciano Zurdo
        </div>
        <div className='flex-1 text-gray-200 flex justify-center'>
            <div className='w-12 bg-gray-200'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='mx-2 text-left'>
                <div>
                    Universidad Nacional <br></br>
                    General Sarmiento
                </div>
            </div>
        </div>
        <div className='flex-1 flex justify-end items-center text-gray-200'>
            <div className='w-10 mx-2'>
                <img src={Linkedin} alt="Linkedin" />
            </div>
            <div className='w-10 mx-2'>   
                <img src={Phone} alt="Linkedin" />
            </div>
            <div className='w-10 mx-2'>
                <img src={Email} alt="Linkedin" />
            </div>
            
        </div>
    </div>
  )
}

export default Footer
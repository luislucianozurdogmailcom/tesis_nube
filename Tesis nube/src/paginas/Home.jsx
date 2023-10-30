import React from 'react'
import Navbar from '../componentes/Navbar'
import ButtonNavBar from '../componentes/ButtonNavBar'
import Indicators from '../componentes/Indicators';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../reducers/sideBar"; // Asegúrate de importar el slice correcto


const Home = () => {

  const isOpen = useSelector((state) => state.sideBar.isOpen); // Accede al valor isOpen desde el estado

  return (
    <div className='flex flex-row h-full w-screen overlfow-hidden bg-gray-200'>
      <Navbar />
      <ButtonNavBar />
      <div className={isOpen ? 'hidden' : 'h-full w-12' }></div>
      <div className={isOpen ? 'w-10/12 h-full bg-gray-200' :'w-12/12 h-full bg-gray-200'}>
        <Indicators titulo_pagina={'Home'}/>
        <div className='w-full items-center justify-center flex w-screen'></div>
        <div className='bg-white flex flex-col justify-center items-center text-3xl text-gray-700 p-6 mx-8 rounded-xl'>
          ¡Bienvenido/a!
          <span className='text-lg font-light mt-4'>Esta es la página de trackeo de nodos de la microred montada en la Universidad 
          Nacional de General Sarmiento</span>

          <span className='text-lg font-light mt-4'>El propósito es poder enviar y recibir información de la placa desarrollada en el marco del proyecto de microredes
          por tanto esta página es una interface de comunicación con la placa</span>
        </div>
      </div>
    </div>
  )
}

export default Home
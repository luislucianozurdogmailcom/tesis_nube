import React from 'react'
import Navbar from '../componentes/Navbar'
import Indicators from '../componentes/Indicators'
import LineChartContainer from '../componentes/LineChartContainer'
import ButtonNavBar from '../componentes/ButtonNavBar'

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../reducers/sideBar"; // Asegúrate de importar el slice correcto

const Analytics = () => {

  const isOpen = useSelector((state) => state.sideBar.isOpen); // Accede al valor isOpen desde el estado

  return (
    <div className='flex flex-row h-full w-screen overlfow-hidden bg-gray-200'>
      <Navbar />
      <ButtonNavBar />
      <div className={isOpen ? 'hidden' : 'h-full w-12' }></div>
      <div className={isOpen ? 'w-10/12 h-full bg-gray-200' :'w-12/12 h-full bg-gray-200'}>
        <Indicators titulo_pagina={'Analytics'}/>
        <LineChartContainer />
      </div>
    </div>
  )
}

export default Analytics
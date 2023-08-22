import React from 'react'
import Navbar from '../componentes/Navbar'
import Indicators from '../componentes/Indicators'
import LineChartContainer from '../componentes/LineChartContainer'

const MainPage = () => {
  return (
    <div className='flex flex-row w-screen'>
      <Navbar />
      <div className='w-10/12 h-screen bg-gray-200'>
        <Indicators />
        <LineChartContainer />
      </div>
      
      
    </div>
  )
}

export default MainPage
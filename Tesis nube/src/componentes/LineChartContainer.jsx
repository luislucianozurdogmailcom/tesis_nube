import React from 'react'
import LineChartComponent from './LineChartComponent'

const LineChartContainer = () => {
  return (
    <div className='grid lg:grid-cols-4 grid-cols-2 m-4'>
        <div className='p-4 col-span-2'>
            <LineChartComponent />
        </div>
        <div className='p-4 col-span-2'>
            <LineChartComponent />
        </div>
    </div>
  )
}

export default LineChartContainer
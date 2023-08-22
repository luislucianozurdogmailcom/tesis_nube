import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faArrowTrendDown} from '@fortawesome/free-solid-svg-icons'

const CardIndicator = (props) => {
  return (
    <div className='bg-white flex flex-col items-start rounded-xl h-full p-4 items-center hover-shadow'>
        <FontAwesomeIcon icon={props.icon} className='text-3xl mx-auto text-yellow-500'/>
        <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-light text-xl mt-3'>{props.value}</span>
        <span className='text-gray-600 font-light text-sm mt-1 text-center'>{props.indicator}</span>
        <div className='flex flex-row justify-between w-full mt-2'>
            {props.improve > 0 
            ? <span className='text-green-600 font-light text-sm mt-1 text-center'>+{props.improve}%</span> 
            : <span className='text-red-600 font-light text-sm mt-1 text-center'>{props.improve}%</span>}
            
            {props.improve > 0 
            ? <FontAwesomeIcon icon={faArrowTrendUp} className='text-xl font-light text-green-500'/> 
            : <FontAwesomeIcon icon={faArrowTrendDown} className='text-xl font-light text-red-500'/>}
            
        </div>
    </div>
  )
}

export default CardIndicator
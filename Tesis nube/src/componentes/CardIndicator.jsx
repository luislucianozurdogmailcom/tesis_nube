import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faArrowTrendDown} from '@fortawesome/free-solid-svg-icons'

const CardIndicator = (props) => {
  return (
    <div className='flex flex-col items-start rounded-2xl h-full p-4 items-center hover-shadow' style={{background: '#2D305B'}}>
        <FontAwesomeIcon icon={props.icon} className='text-3xl mx-auto text-yellow-500'/>
        <span className='text-violet-200 font-bold text-xl mt-3'>{props.value}</span>
        <span className='text-white font-light text-sm mt-1 text-center'>{props.indicator}</span>
        <div className='flex flex-row justify-between w-full mt-2'>
            {props.improve > 0 
            ? <span className='text-green-400 font-light text-sm mt-1 text-center'>+{props.improve}%</span> 
            : <span className='text-red-400 font-light text-sm mt-1 text-center'>{props.improve}%</span>}
            
            {props.improve > 0 
            ? <FontAwesomeIcon icon={faArrowTrendUp} className='text-xl font-light text-green-400'/> 
            : <FontAwesomeIcon icon={faArrowTrendDown} className='text-xl font-light text-red-400'/>}
            
        </div>
    </div>
  )
}

export default CardIndicator
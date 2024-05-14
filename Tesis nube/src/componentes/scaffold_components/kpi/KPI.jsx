import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faArrowTrendDown } from '@fortawesome/free-solid-svg-icons'

const KPI = ({ props, isFixed = false }) => {
  const [isExpanded, setIsExpanded] = useState(isFixed);

  const renderPercentages = () => {
    return props.improve > 0
      ? <span className='text-green-400 font-light text-sm mt-1 text-center'>+{props.improve}%</span>
      : <span className='text-red-400 font-light text-sm mt-1 text-center'>-{props.improve}%</span>
  };

  const renderTrendIcon = () => {
    return props.improve > 0
      ? <FontAwesomeIcon icon={faArrowTrendUp} className='text-xl font-light text-green-400' />
      : <FontAwesomeIcon icon={faArrowTrendDown} className='text-xl font-light text-red-400' />
  };

  const handleMouseEnter = () => {
    if (!isFixed)
      setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (!isFixed)
      setIsExpanded(false);
  };

  return (
    <div className='bg-[#2D305B] flex flex-col rounded-2xl p-5 items-center hover-shadow' 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex ${isExpanded ? 'flex-col' : 'flex-row'} items-center justify-between w-full`}>
        <div className='flex flex-row items-center'>
          <FontAwesomeIcon icon={props.icon} className='text-lg md:text-3xl text-yellow-500' />
          <span className='font-bold text-xl pl-3' style={{ color: '#A99BF9' }}>{props.value}</span>
        </div>
        {!isExpanded && (renderPercentages())}
        {isExpanded && (
          <div className='w-full flex flex-col'> 
            <span className='text-white hidden md:block font-light text-sm mt-5 text-center h-10'>{props.indicator}</span>
            <div className='flex flex-row justify-between mt-5'>
              {renderPercentages()}
              {renderTrendIcon()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default KPI;
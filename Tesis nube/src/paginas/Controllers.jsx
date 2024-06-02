import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faRotate } from '@fortawesome/free-solid-svg-icons';
import Scaffold from '../componentes/scaffold_components/Scaffold';
import Controller from '../componentes/controller_components/controller';

const ControllerButton = ({ icon, color, label }) => {
  return (
    <button className='flex flex-row items-center text-white font-medium py-4 px-4 rounded-md' style={{ backgroundColor: color }}>
      <FontAwesomeIcon icon={icon} className='text-2xl text-white pr-5' />
      {label}
    </button>
  );
}

const Controllers = () => {

  const controllers = [
    { name: 'Switch 1', type: 'switch' , description: 'Este tipo de input se refiere a datos de tipo on/off que desee cambiar en la placa, por ejemplo dejar de medir "x" entrada o comenzar a hacerlo'},
    { name: 'Variable 1', type: 'input', description: 'Este tipo de input se refiere a datos de tipo analógicos que desee cambiar en la placa, por ejemplo setear una salida con "x" voltaje' },
    { name: 'Switch 2', type: 'switch' , description: 'Este tipo de input se refiere a datos de tipo on/off que desee cambiar en la placa, por ejemplo dejar de medir "x" entrada o comenzar a hacerlo' },
    { name: 'Variable 2', type: 'input', description: 'Este tipo de input se refiere a datos de tipo analógicos que desee cambiar en la placa, por ejemplo setear una salida con "x" voltaje'  },
    { name: 'Variable 3', type: 'input', description: 'Este tipo de input se refiere a datos de tipo analógicos que desee cambiar en la placa, por ejemplo setear una salida con "x" voltaje'  },
    { name: 'Switch 3', type: 'switch' , description: 'Este tipo de input se refiere a datos de tipo on/off que desee cambiar en la placa, por ejemplo dejar de medir "x" entrada o comenzar a hacerlo'},
  ];

  return (
    <Scaffold>
      <div className='flex flex-col sm:flex-row gap-4 mb-5'>
        <ControllerButton icon={faSave} color={'#119542'} label={'Guardar Todo'}/>
        <ControllerButton icon={faRotate} color={'#9B2727'} label={'Restaurar Todo'}/>
      </div>
      {controllers.map((c, index) => (
        <Controller
          key={index}
          name={c.name}
          description={c.description}
          type={c.type}
        />
      ))}
    </Scaffold>
  )
}

export default Controllers;
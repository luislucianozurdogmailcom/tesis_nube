import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faRotate } from '@fortawesome/free-solid-svg-icons';
import './styles.css'; // Importa el archivo CSS

const ActionButton = ({ icon, color }) => {
    return (
        <button className='w-min py-1 px-3 rounded-md' style={{ backgroundColor: color }}>
            <FontAwesomeIcon icon={icon} className='text-2xl text-white' />
        </button>
    );
}

const Checkbox = () => {
    const [value, setValue] = useState(false);

    return (
        <div className='flex w-20 justify-center'>
            <div className="cntr">
                <input checked={value} onChange={() => { setValue(!value); }} type='checkbox' id='cbx' className='hidden-xs-up' />
                <label for="cbx" class="cbx" />
            </div>
        </div>
    );
};

const Input = () => {
    return (
        <input
            class="bg-[#202344] w-20 rounded-lg text-white py-3 px-4 text-base hover:border-[#fff] cursor-pointer transition"
            type="text"
        />
    );
}

const Controller = ({ name, description, type }) => {

    return (
        <div className='grid grid-cols-12 items-center py-4 px-8 rounded-2xl mb-5' style={{ backgroundColor: '#2D305B' }}>
            <div className='text-white text-lg col-span-4 md:col-span-2'>{name}</div>
            <div className='text-white text-lg hidden md:block md:col-span-6'>{description}</div>
            <div className='flex justify-end col-span-4 md:col-span-2'>
                {type == 'input'
                    ? <Input />
                    : <Checkbox />}
            </div>
            <div className='w-full flex flex-col lg:flex-row items-end md:justify-end gap-3 col-span-4 md:col-span-2'>
                <ActionButton icon={faSave} color={'#119542'} />
                <ActionButton icon={faRotate} color={'#9B2727'} />
            </div>
        </div>
    )
}

export default Controller; 
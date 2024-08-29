import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faRotate } from '@fortawesome/free-solid-svg-icons';
import './styles.css'; // Importa el archivo CSS
import {updateSensoresActivos} from '../../servicios/ApiCall'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActionButton = ({ icon, color, onClick}) => {
    return (
        <button className='w-min py-1 px-3 rounded-md' style={{ backgroundColor: color }} onClick={onClick}>
            <FontAwesomeIcon icon={icon} className='text-2xl text-white' />
        </button>
    );
}

const Checkbox = ({value, onChange}) => {

    return (
        <div className='flex w-20 h-6 justify-center'>
            <label class="checkbox-container">
                <input class="custom-checkbox" checked={value} onChange={onChange} type="checkbox" />
                <span class="checkmark"></span>
            </label>
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



const Controller = ({ name, description, type, encendido, id_sensor}) => {

    const [checkboxValue, setCheckboxValue] = useState(encendido);

    const handleCheckboxChange = () => {
        setCheckboxValue(!checkboxValue);
    }

    const handleSaveClick = async () => {
        if (checkboxValue){
            const respuesta = await updateSensoresActivos(id_sensor,'true')

            if (respuesta.state){
                // Mostrar notificación de éxito
                toast.success('Guardado exitosamente!', {
                    position: "top-right",
                    autoClose: 5000, // 5 segundos
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    style: { backgroundColor: '#8a2be2' } // Color violeta
                });
            }

        }
        else{
            const respuesta = await updateSensoresActivos(id_sensor,'false')

            if (respuesta.state){
                // Mostrar notificación de éxito
                toast.success('Guardado exitosamente!', {
                    position: "top-right",
                    autoClose: 5000, // 5 segundos
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    style: { backgroundColor: '#8a2be2' } // Color violeta
                });
            }
            
        }
        
        
        
        
    }

    return (
        <div className='bg-[#2D305B] grid grid-cols-12 items-center py-4 px-8 rounded-2xl mb-5'>
            <div className='text-white col-span-4 md:col-span-2'>{name}</div>
            <div className='text-white text-lg hidden md:block md:col-span-6'>{description}</div>
            <div className='flex justify-end col-span-4 md:col-span-2'>
                {type == 'input'
                    ? <Input />
                    : <Checkbox value={checkboxValue} onChange={handleCheckboxChange}/>}
            </div>
            <div className='w-full flex flex-col lg:flex-row items-end md:justify-end gap-3 col-span-4 md:col-span-2'>
                <ActionButton icon={faSave} onClick={handleSaveClick} color={'#119542'} />
                <ActionButton icon={faRotate} color={'#9B2727'} />
            </div>
        </div>
    )
}

export default Controller; 
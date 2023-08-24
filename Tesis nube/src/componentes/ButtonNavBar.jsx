import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../reducers/sideBar"; // Asegúrate de importar el slice correcto

const ButtonNavBar = () => {

    const dispatch = useDispatch();
  
    const isOpen = useSelector((state) => state.sideBar.isOpen); // Accede al valor isOpen desde el estado

    const handleButton = () => {
        dispatch(toggleSideBar());
    }

    return (
    <div className={isOpen ? 'h-screen lg:w-2/12 w-3/12' : 'h-screen w-14 flex flex-col justify-center bg-gray-200 fixed z-0'}>
        <div onClick={handleButton} className='h-14 w-10 bg-white rounded-r-3xl flex flex-row justify-center items-center pr-2'>
            <FontAwesomeIcon className='text-2xl' icon={faArrowRight}/>
        </div>
    </div>
  )
}

export default ButtonNavBar
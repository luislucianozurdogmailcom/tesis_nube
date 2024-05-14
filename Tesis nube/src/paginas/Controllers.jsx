import React from 'react' 

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../reducers/sideBar"; // Asegúrate de importar el slice correcto
import Scaffold from '../componentes/scaffold_components/Scaffold';


const Controllers = () => {
  
  const isOpen = useSelector((state) => state.sideBar.isOpen); // Accede al valor isOpen desde el estado
  
  return (
    <Scaffold>

    </Scaffold>
  )
}

export default Controllers;
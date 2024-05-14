import React from 'react' 
import ChartContainer from '../componentes/dashboard_components/ChartContainer';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../reducers/sideBar"; // Asegúrate de importar el slice correcto
import Scaffold from '../componentes/scaffold_components/Scaffold';

const Dashboard = () => {

  const isOpen = useSelector((state) => state.sideBar.isOpen); // Accede al valor isOpen desde el estado

  return(
    <Scaffold>
      <ChartContainer/>
    </Scaffold>
  ); 
}

export default Dashboard
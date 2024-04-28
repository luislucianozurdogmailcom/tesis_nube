import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHashtag, faCircleNodes } from '@fortawesome/free-solid-svg-icons'
import CardIndicator from './CardIndicator'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { nodeSelected, changeNode } from "../reducers/nodeSelected"; // Asegúrate de importar el slice correcto


// Biblios de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, query, doc, getDoc, aggregate } from 'firebase/firestore/lite';
import GradientCircle from './GradientCircle'

const Indicators = ({titulo_pagina}) => {

    // Mediciones
    const [medicionesCount, setMedicionesCount] = useState(0);
    //const [medicionesList, setMedicionesList]   = useState([]);
    //const [medicionesAvg, setMedicionesAvg]     = useState(0); // Nuevo estado para el promedio
    
    // Redux
    const dispatch  = useDispatch();
    const nodoRedux = useSelector((state) => state.nodeSelected.node);


    // Nodos
    const [nodosList, setNodosList]   = useState([]);
    const [nodosCount, setNodosCount] = useState(0);

    // Obtención de datos agregados
    // intentamos enviar la petición
    useEffect(() => {

      // función que trae los datos de los nodos disponibles en la DB
      const fetchDataNominal = async (query) => {
        try {
          const response = await fetch(`https://62bwhyuxp6.execute-api.us-east-2.amazonaws.com/prod/lanzarQuery?query=${query}`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json', // Especifica el tipo de contenido en el header
              'Authorization': 'Bearer your-token-here' // Aquí puedes agregar cualquier otro encabezado necesario
            },
          });

          if (response.status === 200) {
            const idNodos = response.data.map(item => item[0][0]);
              console.log(idNodos);
          } else {
            // Hacer algo en caso de error
          }
        } catch (error) {
          console.error('An error occurred while sending the request:', error);
        }
      };

      // Llamamos a la API
      fetchDataNominal('select count(*) from mediciones');
    },[]);


  // Manejar cambios en la selección y enviar automáticamente el formulario
  const handleOptionChange = (event) => {
    dispatch(changeNode(event.target.value))
  };

  return (
        <div className='grid lg:grid-cols-4 grid-cols-2 m-4'>
            <div className='lg:col-span-2 col-span-2 flex flex-row justify-center'>
                <div className='text-5xl p-4 mb-4 font-extralight rounded-3xl'>
                    <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-normal'> {titulo_pagina} </span>
                </div>
            </div>
            <div className='col-span-2 w-full font-light flex flex-row justify-center bg-white rounded-xl p-4 m-4 px-8 items-center'>
                  <form className='text-center'>
                    <div>
                      <label htmlFor="dropdown">Nodo seleccionado: </label>
                      <select
                        id="dropdown"
                        name="dropdown"
                        value={nodoRedux}
                        onChange={handleOptionChange}
                      >
                        <option value={nodoRedux}>--</option>
                        {nodosList.map((option, index) => (
                          <option key={index} value={option.id_nodo}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </form>
                  
                  <div className='px-8 numero-animado'><GradientCircle texto={nodoRedux}/></div>
                </div>
            <div className='p-4'>
            <CardIndicator 
                    icon={faHashtag} 
                    value={medicionesCount} 
                    indicator={'Cantidad total de mediciones realizadas'}
                    improve={medicionesCount}
                    />
            </div>
            <div className='p-4'>
            <CardIndicator 
                    icon={faCircleNodes} 
                    value={nodosCount} 
                    indicator={'Nodos funcionales'}
                    improve={nodosCount}
                    />
            </div>
            <div className='p-4'>
            <CardIndicator 
                    icon={faBolt} 
                    value={"12,457A"} 
                    indicator={'Corriente total medida en Amperios'}
                    improve={36}
                    />
            </div>
            <div className='p-4'>
                <CardIndicator 
                    icon={faBolt} 
                    value={"12,457A"} 
                    indicator={'Corriente total medida en Amperios'}
                    improve={12}
                    />
            </div>
            <div>
              {}
            </div>
        </div>


  );
}

export default Indicators
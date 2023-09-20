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

const Indicators = () => {

    // Mediciones
    const [medicionesCount, setMedicionesCount] = useState(0);
    const [medicionesList, setMedicionesList]   = useState([]);
    const [medicionesAvg, setMedicionesAvg]     = useState(0); // Nuevo estado para el promedio
    
    // Redux
    const dispatch  = useDispatch();
    const nodoRedux = useSelector((state) => state.nodeSelected.node);


    // Nodos
    const [nodosList, setNodosList]   = useState([]);
    const [nodosCount, setNodosCount] = useState(0);

    // Obtención de datos agregados
    // intentamos enviar la petición
    useEffect(() => {

      // Traemos datos de avg
      const fetchDataAvg = async (campo,funcion) => { // Marcar la función como asincrónica
        try {
          const response = await axios.post(`https://us-central1-paneles-solares-ungs.cloudfunctions.net/calculateAverage?campo=${campo}`);
          
          if (response.status === 200) {
            funcion(response.data.average);
          } else {
            // Hacer algo en caso de error
          }
        } catch (error) {
          console.error('An error occurred while sending the request:', error);
        }
      };
      
      // Contamos cantidad de mediciones
      const fetchDataCount = async (campo,esquema,funcion) => {
        try {
          const response = await axios.post(`https://us-central1-paneles-solares-ungs.cloudfunctions.net/calculateCount?campo=${campo}&esquema=${esquema}`);
          
          if (response.status === 200) {
            funcion(response.data.totalCount);
          } else {
            // Hacer algo en caso de error
          }
        } catch (error) {
          console.error('An error occurred while sending the request:', error);
        }
      };

      // función que trae los datos de los nodos disponibles en la DB
      const fetchDataNominal = async (campo,esquema,funcion) => {
        try {
          const response = await axios.get(`https://us-central1-paneles-solares-ungs.cloudfunctions.net/getValues?campo_1=${campo}&esquema=${esquema}&page=1&pageSize=20`);

          if (response.status === 200) {
            const idNodos = response.data.map(item => item.id_nodo);
            funcion(idNodos);
          } else {
            // Hacer algo en caso de error
          }
        } catch (error) {
          console.error('An error occurred while sending the request:', error);
        }
      };


      fetchDataCount('valor','mediciones',setMedicionesCount); // Llamar a la función asincrónica
      fetchDataCount('id_nodo','nodos',setNodosCount);         // Llamar a la función asincrónica
      fetchDataNominal('id_nodo','nodos',setNodosList);        // Llamar a la función asincrónica 
    },[]);

  // Opciones para el dropdown
  const options = [
    '1',
    '2',
    '3',
    '4',
  ];

  // Manejar cambios en la selección y enviar automáticamente el formulario
  const handleOptionChange = (event) => {
    dispatch(changeNode(event.target.value))
  };

  return (
        <div className='grid lg:grid-cols-4 grid-cols-2 m-4'>
            <div className='lg:col-span-2 col-span-2 flex flex-row justify-between'>
                <div className='text-5xl p-4 mb-4 font-extralight rounded-3xl '>
                    ¡Bienvenido <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-normal'> Usuario </span>!
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
                        <option value="">--</option>
                        {nodosList.map((option, index) => (
                          <option key={index} value={option.id_nodo}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </form>
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
        </div>

  );
}

export default Indicators
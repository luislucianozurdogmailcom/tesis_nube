import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHashtag, faCircleNodes } from '@fortawesome/free-solid-svg-icons'
import CardIndicator from './CardIndicator'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

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

    // Nodos
    const [nodosList, setNodosList]   = useState([]);
    const [nodosCount, setNodosCount] = useState(0);

    // Obtención de las mediciones
    /*
    useEffect(() => {
      async function fetchData() {
        const mediciones         = collection(db, 'mediciones');
        const medicionesSnapshot = await getDocs(mediciones);
        const medicionesData     = medicionesSnapshot.docs.map(doc => doc.data());
        
        // Seteamos las variables
        setMedicionesList(medicionesData);
        setMedicionesCount(medicionesSnapshot.size);
      
        }

      fetchData();
    }, []);
    */

    // Obtención de los nodos
    /*
    useEffect(() => {
      async function fetchData() {
        const nodos         = collection(db, 'nodos');
        const nodosSnapshot = await getDocs(nodos);
        const nodosData     = nodosSnapshot.docs.map(doc => doc.data());
        setNodosList(nodosData);
        setNodosCount(nodosSnapshot.size);
      }

      fetchData();
    }, []);
    */
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


      fetchDataCount('valor','mediciones',setMedicionesCount); // Llamar a la función asincrónica
      fetchDataCount('id_nodo','nodos',setNodosCount);         // Llamar a la función asincrónica
    },[]);



  return (
        <div className='grid lg:grid-cols-4 grid-cols-2 m-4'>
            <div className='lg:col-span-4 col-span-2 flex flex-row justify-between'>
                <div className='text-5xl p-4 mb-4 font-extralight rounded-3xl '>
                    ¡Bienvenido <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-normal'> Usuario </span>!
                </div>
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
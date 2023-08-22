import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHashtag, faCircleNodes } from '@fortawesome/free-solid-svg-icons'
import CardIndicator from './CardIndicator'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

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
    useEffect(() => {
      async function fetchData() {
        const mediciones = collection(db, 'mediciones');
        const medicionesSnapshot = await getDocs(mediciones);
        const medicionesData = medicionesSnapshot.docs.map(doc => doc.data());
        
        // Seteamos las variables
        setMedicionesList(medicionesData);
        setMedicionesCount(medicionesSnapshot.size);
      
        }

      fetchData();
    }, []);

    // Obtención de los nodos
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

    // Seteo de la configuración de Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBh_K6r6iErdj1NFz3w_X3FafjiIJ8WUgE",
        authDomain: "paneles-solares-ungs.firebaseapp.com",
        projectId: "paneles-solares-ungs",
        storageBucket: "paneles-solares-ungs.appspot.com",
        messagingSenderId: "895158660385",
        appId: "1:895158660385:web:ef3c9d34e1c028f703a260",
        measurementId: "G-ZB0N8MSBBY"
      };

    // Initialize Firebase
    const app       = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db        = getFirestore(app);

    // Get a list of cities from your database
    async function getCities(db) {
        const mediciones   = collection(db, 'mediciones');
        const citySnapshot = await getDocs(mediciones);
        const cityList     = citySnapshot.docs.map(doc => doc.data());
        return cityList.toString;
    }



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

  )
}

export default Indicators
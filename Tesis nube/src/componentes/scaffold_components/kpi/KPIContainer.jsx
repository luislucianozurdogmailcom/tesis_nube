import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHashtag, faCircleNodes, faSquareShareNodes, faRuler } from '@fortawesome/free-solid-svg-icons'
import KPI from './KPI'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { nodeSelected, changeNode } from "../../../reducers/nodeSelected"; // Asegúrate de importar el slice correcto


// Biblios de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, query, doc, getDoc, aggregate } from 'firebase/firestore/lite'; 


// Función de llamada a la API
const ApiCall = async (query) => {
  try {
      const response = await fetch(`https://62bwhyuxp6.execute-api.us-east-2.amazonaws.com/prod/lanzarQuery?query=${query}`, {
          method: 'GET',
          mode: 'cors',
          headers: {
              //'secret'       : 'ungs123', // Corregido: 'Authorization' en lugar de 'Authentication'
              //'client_id'    : 'administrador',
              'Content-Type' : 'application/json',
          },
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error en la llamada a la API:', error);
      throw error;
  }
};


const KPIContainer = ({ fixKPI }) => {

  // Medicionesd
  const [medicionesCount, setMedicionesCount]  = useState(0);
  const [mediciones, setMediciones]            = useState(null);
  const [nodos_activos, setNodosActivos]       = useState(0);
  const [nodos_totales, setNodosTotales]       = useState(0);
  const [sensores_totales, setSensoresTotales] = useState(0);
  const [error, setError]                      = useState(null);
  const [loading, setLoading]                  = useState(true);

  //const [medicionesList, setMedicionesList]   = useState([]);
  //const [medicionesAvg, setMedicionesAvg]     = useState(0); // Nuevo estado para el promedio

  // Redux
  const dispatch = useDispatch();
  const nodoRedux = useSelector((state) => state.nodeSelected.node);


  // Querys
  const query_cantidad_mediciones = `
  select
    count(valor) as valor
  from
    mediciones`;

  const query_cantidad_nodos_funcionales = `
  select
	  count(distinct(id_nodo))  
  from
	  mediciones m
  where fecha = current_date `;

  const query_cantidad_nodos = `
  select
	  count(distinct(id_nodo))  
  from
	  mediciones m
  `;

  const query_cantidad_sensores = `
  select
	  count(distinct id_sensor)
  from
	  mediciones m 
  `;

  /////////////////////////////////////////////////////////////////////////////////
  // Obtención de datos agregados /////////////////////////////////////////////////
  // intentamos enviar la petición ////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
        try {
            const result      = await ApiCall(query_cantidad_mediciones);
            const result_json = result.map(([valor]) => ({valor}));
            console.log('Datos recibidos de la API:', result_json);
            setMediciones(result_json);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError(error);
        } finally {
            setLoading(false);
        };
    };
    
    fetchData();
    }, [query_cantidad_mediciones]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result      = await ApiCall(query_cantidad_nodos_funcionales);
            const result_json = result.map(([valor]) => ({valor}));
            console.log('Datos recibidos de la API:', result_json);
            setNodosActivos(result_json);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError(error);
        } finally {
            setLoading(false);
        };
    };
    
    fetchData();
    }, [query_cantidad_nodos_funcionales]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result      = await ApiCall(query_cantidad_nodos);
            const result_json = result.map(([valor]) => ({valor}));
            console.log('Datos recibidos de la API:', result_json);
            setNodosTotales(result_json);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError(error);
        } finally {
            setLoading(false);
        };
    };
    
    fetchData();
    }, [query_cantidad_nodos]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result      = await ApiCall(query_cantidad_sensores);
            const result_json = result.map(([valor]) => ({valor}));
            console.log('Datos recibidos de la API:', result_json);
            setSensoresTotales(result_json);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError(error);
        } finally {
            setLoading(false);
        };
    };
    
    fetchData();
    }, [query_cantidad_sensores]);

  if (!mediciones || 
      !nodos_activos || 
      !nodos_totales || 
      !sensores_totales 
      //mediciones.length === 0 ||
      //nodos_activos.length === 0 ||
      //nodos_activos.length === 0 ||
      //nodos_activos.length === 0 
      ){
    return <div className='mb-5'>
      <KPI 
            isFixed={fixKPI}
            props={{icon: faHashtag, value: "Loading...", indicator:'Los datos estan llegando...',improve:0}}
          />
    </div>
  }


  // Manejar cambios en la selección y enviar automáticamente el formulario
  const handleOptionChange = (event) => {
    dispatch(changeNode(event.target.value))
  };

  const kpis = [
    { icon: faHashtag, value: mediciones[0]['valor'], indicator: 'Cantidad total de mediciones realizadas', improve: 10 },
    { icon: faCircleNodes, value: nodos_activos[0]['valor'], indicator: 'Nodos funcionales al dia de hoy (midiendo)', improve: 10 },
    { icon: faSquareShareNodes, value: nodos_totales[0]['valor'], indicator: 'Nodos totales', improve: 36 },
    { icon: faRuler, value: sensores_totales[0]['valor'], indicator: 'Entradas de mediciones totales', improve: 12 },
  ];



  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-5'>
      {kpis.map((kpi, index) => (
        <div key={index}>
          <KPI 
            isFixed={fixKPI}
            props={kpi}
          />
        </div>
      ))}
    </div>
  );
}

export default KPIContainer
import React from 'react'

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../reducers/sideBar"; // Asegúrate de importar el slice correcto
import Scaffold from '../componentes/scaffold_components/Scaffold';

const WelcomeBox = () => {
  return (
    <div className='bg-[#2D305B] justify-center items-center text-xl text-white p-10 rounded-2xl'>
      Esta web permite rastrear los nodos de la microrred instalada en la Universidad Nacional de General Sarmiento. Permite facilitar el envío y recepción de información con la placa desarrollada para el proyecto de microrredes, sirviendo como interfaz de comunicación.
    </div>
  );
} 

const InformationBox = ({ title, content }) => {
  return (
    <div className='bg-[#2D305B] flex flex-col text-white text-left rounded-2xl p-6'>
      <span className='text-white font-bold text-2xl'>{title}</span>
      <div className='text-white mt-6 pl-4'>{content}</div>
      <div className='flex flex-col mt-auto items-end'>
        <button className='bg-[#202344] mt-2 py-2 px-5 rounded-xl'>Más info</button>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <Scaffold fixKPI={true}>
      <WelcomeBox />
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10'>
        <InformationBox title={'Objetivo'} content={`Lograr hacer una integración de la placa desarrollada por el IDEI
                                                     para poder darle visibilidad a traves de un scada a sus datos y a su vez
                                                     poder manipular la toma de los datos de manera remota sin necesidad de estar on site.`} />
        
        <InformationBox title={'¿Cómo funciona'} content={`Funciona a traves de la integración de cuatro sistemas que conviven en paralelo
                                                            sosteniendo el ecosistema necesario para que los datos lleguen al usuario desde la placa.
                                                            Estos cuatro sistemas son una base de datos en AWS, una API en AWS, un programa que se ejecuta
                                                            on site junto con el funcionamiento de la placa para leer sus datos y la página web que nos sirve de SCADA`} />
        <div className='flex flex-col'>
          <InformationBox title={'Tecnologias'} content={'Amazon Web Services (Base de datos y API), Python On site (Programa lector de la placa), React JS (Tecnología sobre la cual esta hecha la página)'} />
          <div className='mt-10'/>
          <InformationBox title={'Otros'} content={'Información adicional'} />
        </div>
      </div>
    </Scaffold>
  );
}

export default Home;
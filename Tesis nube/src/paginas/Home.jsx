import React from 'react'

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../reducers/sideBar"; // Asegúrate de importar el slice correcto
import Scaffold from '../componentes/scaffold_components/Scaffold';

const WelcomeBox = () => {
  return (
    <div className='justify-center items-center text-xl text-white p-10 rounded-2xl' style={{ backgroundColor: '#2D305B' }}>
      Esta web permite rastrear los nodos de la microrred instalada en la Universidad Nacional de General Sarmiento. Permite facilitar el envío y recepción de información con la placa desarrollada para el proyecto de microrredes, sirviendo como interfaz de comunicación.
    </div>
  );
} 

const InformationBox = ({ title, content }) => {
  return (
    <div className='flex flex-col text-white text-left rounded-2xl p-6' style={{ backgroundColor: '#2D305B' }}>
      <span className='text-white font-bold text-2xl'>{title}</span>
      <div className='text-white mt-6 pl-4'>{content}</div>
      <div className='flex flex-col mt-auto items-end'>
        <button className='mt-2 py-2 px-5 rounded-xl' style={{ backgroundColor: '#202344' }}>Más info</button>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <Scaffold fixKPI={true}>
      <WelcomeBox />
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10'>
        <InformationBox title={'Objetivo'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.'} />
        <InformationBox title={'¿Cómo funciona?'} content={'Lorem ipsum dolor sit a c augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.'} />
        <div className='flex flex-col'>
          <InformationBox title={'Desarrollo'} content={'Framework 1, Framework 2, Lenguaje 1, Framework 3'} />
          <div className='mt-10'/>
          <InformationBox title={'Otros'} content={'Framework 1, Framework 2, Lenguaje 1, Framework 3'} />
        </div>
      </div>
    </Scaffold>
  );
}

export default Home;
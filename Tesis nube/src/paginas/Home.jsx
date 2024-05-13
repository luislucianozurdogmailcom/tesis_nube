import React from 'react'
/* import Navbar from '../componentes/scaffold_components/Navbar' */
import ButtonNavBar from '../componentes/ButtonNavBar'
import Indicators from '../componentes/Indicators';
import Footer from '../componentes/Footer';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../reducers/sideBar"; // Asegúrate de importar el slice correcto
import Scaffold from '../componentes/Scaffold';


const Home = () => {

  const isOpen = useSelector((state) => state.sideBar.isOpen); // Accede al valor isOpen desde el estado

  return (
    <Scaffold>
      <div className='w-10/12 h-full bg-indigo-950' > 
        <div className='w-full items-center justify-center flex w-screen'></div>
        <div className={`bg-indigo-900 ${isOpen ? '' : 'ml-20'} flex flex-col justify-center items-center text-3xl text-violet-200 p-6 mx-8 rounded-xl`}>
          ¡Bienvenido/a!
          <span className='text-lg font-light mt-4'>Esta es la página de trackeo de nodos de la microred montada en la Universidad
            Nacional de General Sarmiento</span>

          <span className='text-lg font-light mt-4'>El propósito es poder enviar y recibir información de la placa desarrollada en el marco del proyecto de microredes
            por tanto esta página es una interface de comunicación con la placa</span>
        </div>

        <div className='grid grid-cols-3 p-8 gap-8'>
          <div className='bg-indigo-900 text-white p-6 rounded-xl text-left'>
            <span className='text-white text-2xl'>
              Titulo
            </span>
            <br></br>
            <div className='text-white mt-6 pl-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.

              Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.
            </div>
          </div>

          <div className='bg-indigo-900 text-white p-6 rounded-xl text-left'>
            <span className='text-white text-2xl'>
              Titulo
            </span>
            <br></br>
            <div className='text-white mt-6 pl-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.

              Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.
            </div>
          </div>

          <div className='bg-indigo-950 text-white text-left grid grid-row-2 gap-8'>

            <div className='bg-indigo-900 rounded-xl p-6'>
              <span className='text-white text-2xl'>
                Titulo
              </span>

              <br></br>

              <div className='text-white mt-6 pl-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.
              </div>
            </div>

            <div className='bg-indigo-900 rounded-xl p-6'>
              <span className='text-white text-2xl'>
                Titulo
              </span>

              <br></br>
              <div className='text-white mt-6 pl-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.
              </div>
            </div>

          </div>
        </div> 
      </div>
    </Scaffold>
  );
  /* return (
    <div className='flex flex-row h-full w-full bg-indigo-950 '>
      <Navbar /> 
      <ButtonNavBar /> 
      <div className='w-10/12 h-full bg-indigo-950' >
        <Indicators titulo_pagina={'Home'} />
        <div className='w-full items-center justify-center flex w-screen'></div>
        <div className={`bg-indigo-900 ${isOpen ? '' : 'ml-20'} flex flex-col justify-center items-center text-3xl text-violet-200 p-6 mx-8 rounded-xl`}>
          ¡Bienvenido/a!
          <span className='text-lg font-light mt-4'>Esta es la página de trackeo de nodos de la microred montada en la Universidad
            Nacional de General Sarmiento</span>

          <span className='text-lg font-light mt-4'>El propósito es poder enviar y recibir información de la placa desarrollada en el marco del proyecto de microredes
            por tanto esta página es una interface de comunicación con la placa</span>
        </div>

        <div className='grid grid-cols-3 p-8 gap-8'> 
          <div className='bg-indigo-900 text-white p-6 rounded-xl text-left'>
            <span className='text-white text-2xl'>
              Titulo
            </span>
            <br></br>
            <div className='text-white mt-6 pl-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.

              Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.
            </div>
          </div>

          <div className='bg-indigo-900 text-white p-6 rounded-xl text-left'>
            <span className='text-white text-2xl'>
              Titulo
            </span>
            <br></br>
            <div className='text-white mt-6 pl-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.

              Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.
            </div>
          </div>

          <div className='bg-indigo-950 text-white text-left grid grid-row-2 gap-8'>

            <div className='bg-indigo-900 rounded-xl p-6'>
              <span className='text-white text-2xl'>
                Titulo
              </span>

              <br></br>

              <div className='text-white mt-6 pl-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.
              </div>
            </div>

            <div className='bg-indigo-900 rounded-xl p-6'>
              <span className='text-white text-2xl'>
                Titulo
              </span>

              <br></br>
              <div className='text-white mt-6 pl-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.
              </div>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </div>
  ) */
}

export default Home
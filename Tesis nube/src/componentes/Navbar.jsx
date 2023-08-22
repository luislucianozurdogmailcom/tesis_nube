import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faChartGantt} from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar h-screen lg:w-2/12 w-3/12 bg-gradient-to-b from-violet-500 to-blue-500 text-white flex flex-col">
      <div className="p-4 bg-violet-800 flex justify-center mb-4">
        <h1 className="text-white text-xl font-bold">Proyecto UNGS</h1>
      </div>
      <ul className="py-4 flex-1 overflow-y-auto">
        <li className="py-4 pl-6 hover:bg-white hover:text-slate-700"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> &nbsp;  Home </li>
        <li className="py-4 pl-6 hover:bg-white hover:text-slate-700"><FontAwesomeIcon icon={faChartGantt} /> &nbsp; Analytics</li>
        <li className="py-4 pl-6 hover:bg-white hover:text-slate-700"><FontAwesomeIcon icon={faGear} /> &nbsp;Settings</li>
      </ul>
    </div>
    
  )
}

export default Navbar
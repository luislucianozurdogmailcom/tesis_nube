import React, { useState } from 'react'
import Scaffold from '../componentes/scaffold_components/Scaffold';

const CommandResponse = ({ command }) => {
    return (
        <div className='mb-3'>
            <p className='flex flex-row font-black'>Command {'>'}<p className='ml-3 font-medium'> {command}</p></p>
            <p>{command}</p>
        </div>
    );
};

const DQuery = () => {
    const [query, setQuery] = useState('');
    const [commands, setCommands] = useState([]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleExecuteQuery = () => {
        if (query.trim() !== '') {
            setCommands([...commands, query]);
            setQuery('');
        }
    };

    return (
        <Scaffold>
            <div className='flex flex-col w-full h-full'>
                <div className='bg-[#2D305B] bg-opacity-50 rounded-2xl text-white py-3 px-4 border-[#2D305B] border-8' style={{overflow: 'auto', height: '68vh'}}>
                    {commands.map((command, index) => (
                        <CommandResponse key={index} command={command} />
                    ))}
                </div>
                <div className='flex flex-row w-full mt-5'>
                    <input
                        class="bg-[#2D305B] w-full rounded-lg text-white py-3 px-4 text-base hover:border-[#fff] cursor-pointer transition"
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') 
                                handleExecuteQuery(); 
                        }}
                    />
                    <button onClick={handleExecuteQuery} className='bg-[#2D305B] rounded-lg text-white py-3 px-10 ml-5 hover:border-[#fff] cursor-pointer'>Ejecutar</button>
                </div>
            </div>
        </Scaffold>
    );
};

export default DQuery;
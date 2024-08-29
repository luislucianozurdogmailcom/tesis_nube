import React, { useState } from 'react'
import Scaffold from '../componentes/scaffold_components/Scaffold';
import ApiCall from '../servicios/ApiCall';

const CommandResponse = ({ command }) => {
    return (
        <div className='mb-3'>
            <p className='flex flex-row font-black'>Command {'>'}<p className='ml-3 font-medium'> {command.query}</p></p>
            {Array.isArray(command.response) ? (
                    command.response.map((object, index) => (
                        <React.Fragment key={index}>
                            <div>{JSON.stringify(object)}</div>
                            {index < command.response.length - 1 && <hr className="divider" />}
                        </React.Fragment>
                    ))
                ) : (
                    <p>{command.response}</p>
                )}
        </div>
    );
};

const DQuery = () => {
    const [query, setQuery] = useState('');
    const [commands, setCommands] = useState([]);
    const [response, setResponse] = useState([]);


    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleExecuteQuery = async () => {
        if (query.trim() !== '') {
            setCommands([...commands, {'query' : query, 'response' : 'Esperando la respuesta del servidor...'}]);
            try{

                const respuesta = await ApiCall(query);
                setCommands([...commands, {'query' : query, 'response' : respuesta}]);
                setQuery('');
            }
            catch{
                setCommands([...commands, {'query' : query, 'response' : 'Hubo algún tipo de error, puede ser que tu query esté mal, por favor verificala. Si llamas a campos de fechas deberás de pasarlas a varchar en tu select o dará un error.'}]);
            }

            
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
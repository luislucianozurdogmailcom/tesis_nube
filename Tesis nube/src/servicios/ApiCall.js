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

export const medicionesPinActivos = async (pin_en_placa,limite) => {
    try {
        const response = await fetch(`https://62bwhyuxp6.execute-api.us-east-2.amazonaws.com/prod/medicionesPinFuncionales?pin_en_placa=${pin_en_placa}&limite=${limite}`, {
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

export const updateSensoresActivos = async (id_sensor,estado) => {

    try {

        const response = await fetch(`https://62bwhyuxp6.execute-api.us-east-2.amazonaws.com/prod/updateSensor?id_sensor=${id_sensor}&value=${estado}`, {
            method: 'POST',
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


export default ApiCall;
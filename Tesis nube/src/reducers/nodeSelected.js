import { createSlice} from "@reduxjs/toolkit";

export const nodeSelected = createSlice({
    name         : 'node',
    initialState : {
        node   : 0,
    },
    reducers     : {
        changeNode : (state, action) => {
            state.node = action.payload; // Guardar el valor del nodo selecionado
        }
    } 
});

// Exportamos las acciones
export const {changeNode} = nodeSelected.actions

export default nodeSelected.reducer
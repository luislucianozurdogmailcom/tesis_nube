import { createSlice} from "@reduxjs/toolkit";

export const chats = createSlice({
    name         : 'textos',
    initialState : {
        textos   : [],
    },
    reducers     : {
        addText  : (state, action) => {
            return {
                ...state,
                textos : state.textos.concat(action.payload)
            }
        }
    } 
});

// Exportamos las acciones
export const {addText} = chats.actions

export default chats.reducer
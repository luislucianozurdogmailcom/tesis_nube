import { createSlice} from "@reduxjs/toolkit";

export const sideBar = createSlice({
    name         : 'isOpen',
    initialState : {
        isOpen   : true,
    },
    reducers     : {
        toggleSideBar : (state) => {
            state.isOpen = !state.isOpen; // Invertir el valor de isOpen
        }
    } 
});

// Exportamos las acciones
export const {toggleSideBar} = sideBar.actions

export default sideBar.reducer
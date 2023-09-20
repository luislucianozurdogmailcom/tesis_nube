import {configureStore} from '@reduxjs/toolkit'
import chats from './reducers/chats'
import sideBar from './reducers/sideBar'
import nodeSelected from './reducers/nodeSelected'


export default configureStore({
    reducer: {
        chats : chats,
        sideBar: sideBar,
        nodeSelected: nodeSelected,
    },
})
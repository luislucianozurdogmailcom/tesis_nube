import {configureStore} from '@reduxjs/toolkit'
import chats from './reducers/chats'
import sideBar from './reducers/sideBar'


export default configureStore({
    reducer: {
        chats : chats,
        sideBar: sideBar,
    },
})
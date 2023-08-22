import {configureStore} from '@reduxjs/toolkit'
import chats from './reducers/chats'


export default configureStore({
    reducer: {
        chats : chats,
    },
})
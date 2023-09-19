import {configureStore} from '@reduxjs/toolkit'
import blogAppReducer from './slice'

export const store = configureStore({
    reducer:{
        blogReducer: blogAppReducer
    }
})


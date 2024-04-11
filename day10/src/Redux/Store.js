import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from './CounterReducer'
import ThemeReducer from './ThemeReducer'


export const Store=configureStore({

    reducer:CounterReducer,
    
})

export const Store2=configureStore({

    reducer:ThemeReducer,
    
})

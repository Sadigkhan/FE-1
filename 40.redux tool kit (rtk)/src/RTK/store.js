import {
    configureStore
} from '@reduxjs/toolkit'
import counterReducer from './features/counter'
import basketReducer from './features/basket'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        basket: basketReducer
    },
})
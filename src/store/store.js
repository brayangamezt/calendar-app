import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, calendarSlice } from './';

// Funcion principal donde se guardan los valores de los reducers
export const store = configureStore({
    reducer:{
        calendar: calendarSlice.reducer,
        ui:uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
})
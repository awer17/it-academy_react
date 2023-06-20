import { configureStore } from '@reduxjs/toolkit';
import dogListReducer from './dogSlice'

export const store = configureStore({
    reducer: {
        dog: dogListReducer,
    },
})

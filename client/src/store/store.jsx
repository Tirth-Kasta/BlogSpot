import { configureStore } from "@reduxjs/toolkit";
import addReducer from './auth.slice';

export const store = configureStore({
    reducer:addReducer
})
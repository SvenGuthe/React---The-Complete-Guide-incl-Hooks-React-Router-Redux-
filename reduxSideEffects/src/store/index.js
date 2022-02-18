import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './../store/cart';
import uiReducer from './../store/ui';

const store = configureStore({
    reducer : {
        cart: cartReducer,
        ui: uiReducer
    }
})

export default store;
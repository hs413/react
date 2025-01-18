import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart.js'
import userProgressReducer from './userProgress.js'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    userProgress: userProgressReducer,
  }
});

export default store;

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../REDUX-TOOlKIT/counterSlice'
import cakeReducer from '../CAKE-ORDER/cakeSlicer'
// import cakeSlicer from '../CAKE-ORDER/'
import cartReducer from '../ADD-TO-CART/dataSlicer'

export const store = configureStore({
  reducer: {
    cakes: cakeReducer,
    counter: counterReducer,
    cart: cartReducer
  },
})
export default store
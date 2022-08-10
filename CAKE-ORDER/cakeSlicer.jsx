  import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    cake: 20,
    valu: []
  }
  

export const cakeSlicer = createSlice ({
    name: 'cake',
    initialState,
    reducers : {
        cakeOrdered: (state)=>{
            state.cake --
        },
        restorked: (state, action)=>{
            state.cake += action.payload
        },
        getVAl: (state, action) => {
            state.valu +=action.payload
          }
      // incrementBycake: (state, action) => {
      //   state.cake += action.payload
      // },
    },
})
  
export const { cakeOrdered, restorked, getVAl } = cakeSlicer.actions
export default cakeSlicer.reducer
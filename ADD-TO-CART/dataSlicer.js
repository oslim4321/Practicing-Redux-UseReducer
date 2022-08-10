import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

export const dataSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addtocart: (state, action) => {
            state.cart += action.payload
        },
        // extraReducers: ()=> {
        //     builder.addCase(addtocart, (state) => {
        //         state.cart += action.payload
        //     })
        // }
    }
})
export const {addtocart} = dataSlicer.actions
export default dataSlicer.reducer
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    price: 0
}

const OrderSlice = createSlice({
    name: 'OrderSlice',
    initialState,
    reducers: {
        addPrice: (state, action) => {
            state.price += action.payload;
        }
    }
})
export const { addPrice } = OrderSlice.actions
export default OrderSlice.reducer
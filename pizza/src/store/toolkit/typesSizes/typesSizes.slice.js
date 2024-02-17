import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    types: '',
    sizes: '',
}

const typesSizesSlice = createSlice({
    name: 'typesSizesSlice',
    initialState,
    reducers: {
        addTypes: (state, action) => {
            state.types = action.payload
        },
        addSizes: (state, action) => {
            state.sizes = action.payload
        }
    }
})
export const { addPrice, addTypes, addSizes } = typesSizesSlice.actions
export default typesSizesSlice.reducer
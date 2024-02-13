import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: 'популярности'
}

const SortSlice = createSlice({
    name: 'SortSlice',
    initialState,
    reducers: {
        ChangeSort: (state,action) => {
            state.sort = action.payload
        }
    }
})

export const {ChangeSort} = SortSlice.actions
export default SortSlice.reducer
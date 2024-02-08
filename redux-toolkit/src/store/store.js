import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/user/UserSlice";
import { todoSlice } from "../features/todo/TodoSlice";
import postSlice from "../features/post/postSlice";


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        todo: todoSlice.reducer,
        post: postSlice.reducer,
    },
})
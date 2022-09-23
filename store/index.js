import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./slices/chartSlice";

export const store = configureStore({
    reducer: {
        chats: chatSlice
    }
})
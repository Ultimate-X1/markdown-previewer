import previewReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: previewReducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
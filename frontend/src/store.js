import {configureStore} from "@reduxjs/toolkit";
import imageReducer from "./controller/redux/imageSlice";

export const store = configureStore({
    reducer: {
        image: imageReducer,
    }
})
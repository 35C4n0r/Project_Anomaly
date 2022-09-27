import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import qs from 'qs';
const URL = 'http://localhost:5000';

const initialState = {
    tensor: [],
    base64: "",
    value: "",
}


export const initializeImageTensor = createAsyncThunk(
    'init_image_tensor',
    async (tensor, thunkAPI) => {
        const res = await axios.post(`${URL}/predict`, qs.stringify(tensor));
        return res.data;
    }
)


export const initializeImageBase64 = createAsyncThunk(
    'init_image_base64',
    async (base64, thunkAPI) => {
        const res = await axios.post(`${URL}`, qs.stringify(base64));
        return res.data;
    }
)


const imageSlice = createSlice({
    name: 'image',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [initializeImageTensor.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
        [initializeImageBase64.fulfilled]: (state, action) => {

        },
    },
})

export default imageSlice.reducer;
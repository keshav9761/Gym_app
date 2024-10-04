import { createAsyncThunk } from "@reduxjs/toolkit";
import { postReq, getReq } from "../../../RootServices";
import APIEndPoints from './apiEndpoints'

const { REGISTER } = APIEndPoints;

const authRegister = createAsyncThunk('auth/registration', async (payload) => {
    try {
        console.log("first", payload)
        const response = await postReq(REGISTER, payload);

        if (response.status >= 400) { // Successfull
            return response.response.data
        }

        return response?.data; // Failed
    } catch (err) {
        console.log(">>>>>ERROR Ser-->>>>>", err)
    }
})
export default { authRegister };
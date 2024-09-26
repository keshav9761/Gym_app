import { createAsyncThunk } from "@reduxjs/toolkit";
import { postReq, getReq } from "../../../RootServices";
import APIEndPoints from './apiEndpoints'

const { REGISTER } = APIEndPoints;

const authRegister = createAsyncThunk('auth/registration', async (payload) => {
    try {
        const response = await postReq(REGISTER, payload);
        console.log("first", response)
        if (response.status >= 400) {
            return response.response.data
        }

        return response?.data;
    } catch (err) {
        console.log(">>>>>ERROR Ser-->>>>>", err)
    }
})
export default { authRegister };
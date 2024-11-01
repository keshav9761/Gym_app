import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";
import { postReq } from "../../../RootServices";
 
const { LOGIN } = apiEndpoints;

const authLogin = createAsyncThunk('login', async (payload) => {
    try {
        const response = await postReq(LOGIN, payload)
        if (response.status >= 400) { // Successfull
            return response.response.data
        }

        return response?.data; // Failed
    } catch (err) {
        console.log(">>>LOGIN catch Error", err)
    }
})
export default { authLogin };
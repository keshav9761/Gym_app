import { createAsyncThunk } from "@reduxjs/toolkit";
import { postReq } from "../../../RootServices";
import apiEndpoint from "./apiEndpoint";

const { FORGETPWD } = apiEndpoint

const forgetPWd = createAsyncThunk('forget', async (payload) => {
    try {
        const response = await postReq(FORGETPWD, payload)
        if (response.status >= 400) { // Successfull
            return response.response.data
        }

        return response?.data; // Failed
    } catch (err) {
        console.log(">>>FORGETPWD catch Error", err)
    }
})
export default { forgetPWd }
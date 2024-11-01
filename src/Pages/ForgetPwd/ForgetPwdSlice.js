import { createSlice } from "@reduxjs/toolkit";
import Services from "./Services/ForgetServices";

const {forgetPWd } = Services;

const forgetSlice = createSlice({
    name: 'forget',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,
    },
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(forgetPWd.pending, (state, action) => {
                state.isLoader = true;
            })
            .addCase(forgetPWd.fulfilled, (state, action) => {
                const { payload } = action;
                state.isLoader = false;
                console.log("-----slice-----", payload)
                state.data = payload;
            })
            .addCase(forgetPWd.rejected, (state, action) => {
                state.isLoader = false;
                state.isError = true;
            });
    },
});

export const forgetActions = forgetSlice.actions;
export default forgetSlice.reducer;
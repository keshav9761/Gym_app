import { createSlice } from "@reduxjs/toolkit";
import Services from "./Services/loginServices";

const { authLogin } = Services;

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,
    },
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authLogin.pending, (state, action) => {
                state.isLoader = true;
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                const { payload } = action;
                state.isLoader = false;
                console.log("-----slice-----", payload)
                state.data = payload;
            })
            .addCase(authLogin.rejected, (state, action) => {
                state.isLoader = false;
                state.isError = true;
            });
    },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
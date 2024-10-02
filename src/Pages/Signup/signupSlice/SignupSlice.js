import { createSlice } from '@reduxjs/toolkit';
import Services from '../Services/signupServices';

const { authRegister } = Services;

const signupSlice = createSlice({
    name: 'auth',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,
    },
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authRegister.pending, (state, action) => {
                state.isLoader = true;
            })
            .addCase(authRegister.fulfilled, (state, action) => {
                const { payload } = action || {};
                state.isLoader = false;
                state.data = payload;
            })
            .addCase(authRegister.rejected, (state, action) => {
                state.isLoader = false;
                state.isError = true;
            });
    },
});

export const signupActions = signupSlice.actions;
export default signupSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: undefined,
    isLoading: true,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        loginFailure(state) {
            state.isLoading = false;
        },
        logout(state) {
            state.currentUser = undefined;
            state.isLoading = false;
        }
    }
});
export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
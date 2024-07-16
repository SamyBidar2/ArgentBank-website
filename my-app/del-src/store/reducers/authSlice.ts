import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.currentUser = action.payload;
        },
        loginFailure(state) {
            state.currentUser = undefined;
        },
        logout(state) {
            state.currentUser = undefined;
            localStorage.removeItem('Token');
        }
    }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;

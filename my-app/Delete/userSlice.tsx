import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("fetchUser", async() =>{
   const data = await fetch('');
   return data.json();
})

const userSlice = createSlice({
   name:'user',
   initialState:{
        user: null
   },
   reducers:{
      login: (state, action) => {
         state.user = action.payload;
      },
      logout: (state, action) => {
         state.user = null;
      }
   },
});

// export const { login, logout } = userSlice.actions;
// export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
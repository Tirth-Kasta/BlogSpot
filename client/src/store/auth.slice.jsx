import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || "",
    userId: localStorage.getItem("userId") || "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        add: (state, action) => {
            state.token = action.payload.token;
            state.userId = action.payload.userid;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("userId", action.payload.userId);
        },
        clean: (state) => {
            state.token = "";
            state.userId = "";
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
        },
        checkAndClean: (state) => {
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");
            if (!token || !userId) {
                state.token = "";
                state.userId = "";
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
            }
        },

    },
});

export const { add, clean, checkAndClean } = authSlice.actions;
export default authSlice.reducer;
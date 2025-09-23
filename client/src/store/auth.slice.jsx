import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
const base_url = import.meta.env.VITE_API_URL;

const initialState = {
    token: localStorage.getItem("token") || "",
    userid: localStorage.getItem("userid") || "",
};

const userAuth = async () => {
    try {
        const response = await axios.get(base_url + 'user/' + initialUserId, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });
        if (response.status == 200) {
            console.log(response.data)
            console.log("correct data")

        } else {
            console.log("folse data")
        }
    } catch (error) {
        console.log(error)
    }
};
useEffect(() => {
    if (initialState && initialUserId) {
        userAuth();
    }
}, []);

export const saveSlice = createSlice({
    name: 'saveInLocalStroge',
    initialState,
    reducers: {
        add: (state, action) => {
            // state.token = action.payload.token;
            // state.userid = action.payload.userid;
            console.log(action.payload.token);
            console.log(action.payload.userid);
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("userid", action.payload.userid)
        },
        clean: (state) => {
            console.log(state.token);
            state.token = ""
            localStorage.removeItem("token");
        }


    }
});

export const { add, clean } = saveSlice.actions

export default saveSlice.reducer
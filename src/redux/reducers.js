import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		email: "",
		token: "",
		firstname: "",
		lastname: "",
	},
	reducers: {
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setFirstname: (state, action) => {
			state.firstname = action.payload.firstName;
		},
		setLastname: (state, action) => {
			state.lastname = action.payload.lastName;
		},
	},
});

export const { setEmail, setToken, setFirstname, setLastname } = userSlice.actions;

export const userReducer = userSlice.reducer;

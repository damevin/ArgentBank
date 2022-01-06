export const TOKEN_SUCCESS = "TOKEN_SUCCESS";
export const TOKEN_ERROR = "TOKEN_ERROR";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERROR = "USER_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_EDIT_SUCCESS = "USER_EDIT_SUCESS";
export const USER_EDIT_ERROR = "USER_EDIT_ERROR";

export const fetchTokenSuccess = (token) => {
	return {
		type: TOKEN_SUCCESS,
		token,
		remember: token.body.remember,
	};
};

export const fetchTokenError = (error) => ({
	type: TOKEN_ERROR,
	error,
});

export const fetchUserSuccess = (user) => {
	return {
		type: USER_SUCCESS,
		user: user.body,
		token: user.token,
	};
};

export const fetchUserError = (userError) => ({
	type: USER_ERROR,
	userError,
	token: false,
});

export const userLogout = () => {
	return {
		type: USER_LOGOUT,
		user: {},
		token: false,
	};
};

export const userEditSuccess = (user) => {
	return {
		type: USER_EDIT_SUCCESS,
		user: user.body,
	};
};

export const userEditError = (userError) => {
	return {
		type: USER_EDIT_ERROR,
		userError,
	};
};

import { initialStateAuthentification, initialStateUser } from "./initialsStates";
import {
	TOKEN_ERROR,
	TOKEN_SUCCESS,
	USER_EDIT_ERROR,
	USER_EDIT_SUCCESS,
	USER_ERROR,
	USER_LOGOUT,
	USER_SUCCESS,
} from "./actions";

const initialState = { ...initialStateAuthentification, ...initialStateUser };

export const userAuthentification = (state = initialState, action) => {
	switch (action.type) {
		case TOKEN_SUCCESS: {
			return {
				...state,
				token: action.token.body.token,
				remember: action.token.body.remember,
			};
		}
		case TOKEN_ERROR: {
			return {
				...state,
				error: action.error,
				loading: action.loading,
			};
		}

		case USER_SUCCESS: {
			return {
				...state,
				user: action.user,
				userLoading: action.userLoading,
				token: action.token,
			};
		}
		case USER_ERROR: {
			return {
				...state,
				userError: action.userError,
				userLoading: action.userLoading,
				token: action.token,
			};
		}

		case USER_LOGOUT: {
			if (localStorage.getItem("token")) {
				localStorage.removeItem("token");
			}
			return {
				...state,
				user: {},
				token: "",
			};
		}

		case USER_EDIT_SUCCESS: {
			return {
				...state,
				user: action.user,
				userLoading: action.userLoading,
			};
		}

		case USER_EDIT_ERROR: {
			return {
				...state,
				userError: action.userError,
				userLoading: action.userLoading,
			};
		}
		default:
			return state;
	}
};

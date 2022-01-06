import { fetchUserSuccess, fetchUserError } from "../actions";

const api = process.env.REACT_APP_API_URL;
const url = `${api}/user`;

export const fetchUser = (query) => {
	return async (dispatch) => {
		return fetch(`${url}/${query.endPoint}`, {
			method: query.method,
			headers: {
				Authorization: `Bearer ${query.token}`,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((user) => {
				if (query.token) {
					user.token = query.token;
				}
				dispatch(fetchUserSuccess(user));
			})
			.catch((userError) => {
				dispatch(fetchUserError(true));
			});
	};
};

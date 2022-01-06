import { fetchTokenSuccess, fetchTokenError } from "../actions";

const api = process.env.REACT_APP_API_URL;
const url = `${api}/user`;

export const fetchToken = (query) => {
	return (dispatch) => {
		return fetch(`${url}/${query.endPoint}`, {
			method: query.method,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(query.body),
		})
			.then((response) => {
				console.log(response);
    return response.json()
			})
			.then((user) => {
				user.body.remember = query.remember;
				dispatch(fetchTokenSuccess(user));
			})
			.catch((error) => {
    console.error(error)
				dispatch(fetchTokenError(true));
			});
	};
};

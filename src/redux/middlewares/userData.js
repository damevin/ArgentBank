import { userEditSuccess, userEditError } from "../actions";

const api = process.env.REACT_APP_API_URL;
const url = `${api}/user`;

export const setUserData = (query) => {
	return async (dispatch) => {
		return fetch(`${url}/${query.endPoint}`, {
			method: query.method,
			headers: {
				Authorization: `Bearer ${query.token}`,
				"Content-Type": "application/json",
			},
   body: JSON.stringify(query.body),
		})
			.then((response) => {
    console.log(response.json())
				return response.json();
			})
			.then((user) => {
 
    console.log(user, "je suis la")
				dispatch(userEditSuccess(user));
			})
			.catch((userError) => {
				dispatch(userEditError(userError));
			});
	};
};

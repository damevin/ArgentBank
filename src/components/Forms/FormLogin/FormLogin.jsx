import "./FormLogin.scss";
import { Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setEmail, setToken, setFirstname, setLastname } from "../../../redux/reducers";
import React from "react";

export default function FormLogin() {
	const token = useSelector((state) => state.user.token);
	const dispatch = useDispatch();

	const [userInputs, setUserInputs] = useState({
		email: "",
		password: "",
	});
	const [formIsSubmited, setFormIsSubmited] = useState(false);
	const [submitError, setSubmitError] = useState(false);

	const inputChange = (event) => {
		const inputType = event.target.id;
		setUserInputs({
			...userInputs,
			[inputType]: event.target.value,
		});
		setSubmitError(false);
	};

	const loginFormSubmit = (event) => {
		event.preventDefault();
		setFormIsSubmited(true);
	};

	useEffect(() => {
		if (formIsSubmited) {
			const api = process.env.REACT_APP_API_URL;
			const url = `${api}/user/login`;
			const loginPayload = {
				email: userInputs.email,
				password: userInputs.password,
			};

			fetch(url, {
				method: "POST",
				body: JSON.stringify(loginPayload),
				headers: { "Content-type": "application/json" },
			})
				.then((response) => response.json())
				.then((json) => {
					dispatch(setEmail(userInputs.email));
					dispatch(setToken(json.body.token));

				})
				.catch((error) => {
					setSubmitError(true);

					setUserInputs({
						...userInputs,
					});
				});
			setFormIsSubmited(false);
		}
	}, [dispatch, userInputs, formIsSubmited]);

	if (token) return <Navigate to="/profile" />;

	return (
		<form className="formLogin" onSubmit={loginFormSubmit}>
			<div className="formLogin__wrapper">
				<label className="formLogin__label" htmlFor="">
					E-mail
				</label>
				<input className="formLogin__input" id="email" onChange={inputChange} type="text" />
			</div>
			<div className="formLogin__wrapper">
				<label className="formLogin__label" htmlFor="">
					Password
				</label>
				<input className="formLogin__input" id="password" onChange={inputChange} type="password" />
			</div>
			<div className="formLogin__wrapper--secondary">
				<input className="formLogin__input--secondary" id="save" type="checkbox" />
				<label className="formLogin__label--secondary" htmlFor="">
					Remember me
				</label>
			</div>
			<button className="formLogin__btn" type="submit">
				Sign In
			</button>
		</form>
	);
}

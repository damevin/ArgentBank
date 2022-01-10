import "./FormLogin.scss";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { fetchToken } from "../../redux/middlewares/token";
import { useRef } from "react";

import React from "react";

const Login = ({ token, fetchToken, error, userError, remember }) => {
	const inputEmail = useRef();
	const inputPassword = useRef();
	const inputRemember = useRef();

	const loginFormSubmit = (event) => {
		event.preventDefault();
		const query = {
			method: "POST",
			endPoint: "login",
			body: {
				email: inputEmail.current.value,
				password: inputPassword.current.value,
			},
			remember: inputRemember.current.checked,
		};
		fetchToken(query);
	};
	if (token) {
		if (remember) {
			localStorage.setItem("token", token);
		}
		return <Navigate to="/profile" />;
	}
	return (
		<form className="formLogin" onSubmit={loginFormSubmit}>
			<div className="formLogin__wrapper">
				<label className="formLogin__label" htmlFor="email">
					E-mail
				</label>
				<input className="formLogin__input" id="email" ref={inputEmail} type="text" />
			</div>
			<div className="formLogin__wrapper">
				<label className="formLogin__label" htmlFor="password">
					Password
				</label>
				<input className="formLogin__input" id="password" ref={inputPassword} type="password" />
				{error && <span className="error-txt">Incorrect username or password</span>}
			</div>
			<div className="formLogin__wrapper--secondary">
				<input className="formLogin__input--secondary" id="save" type="checkbox" ref={inputRemember} />
				<label className="formLogin__label--secondary" htmlFor="save">
					Remember me
				</label>
			</div>
			<button className="formLogin__btn" type="submit">
				Sign In
			</button>
		</form>
	);
};

const mapStateToProps = ({ token, error, loading, userError, remember }) => {
	return {
		token,
		error,
		loading,
		remember,
		userError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchToken: (...args) => dispatch(fetchToken(...args)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

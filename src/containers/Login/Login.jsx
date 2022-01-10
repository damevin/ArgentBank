import "./Login.scss";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import FormLogin from "../../components/FormLogin/FormLogin";
import React from "react";

export default function Login() {
	return (
		<div className="login">
			<main className="login__box">
				<UserIcon className="login__box__icon"></UserIcon>
				<h1 className="login__box__title">Sign In</h1>
				<FormLogin></FormLogin>
			</main>
		</div>
	);
}

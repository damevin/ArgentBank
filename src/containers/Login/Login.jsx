import React from "react";
import { ReactComponent as UserIcon } from "../../components/Buttons/icons/user.svg";
import FormLogin from "../../components/Forms/FormLogin/FormLogin";
import "./Login.scss";

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

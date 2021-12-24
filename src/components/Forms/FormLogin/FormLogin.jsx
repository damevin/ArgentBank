import React from "react";
import "./FormLogin.scss";

export default function FormLogin() {
	return (
		<form className="formLogin">
			<div className="formLogin__wrapper">
				<label className="formLogin__label" htmlFor="">
					Username
				</label>
				<input className="formLogin__input" type="text" />
			</div>
			<div className="formLogin__wrapper">
				<label className="formLogin__label" htmlFor="">
					Password
				</label>
				<input className="formLogin__input" type="password" />
			</div>
			<div className="formLogin__wrapper--secondary">
				<input className="formLogin__input--secondary" type="checkbox" />
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

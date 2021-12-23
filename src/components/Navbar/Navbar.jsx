import "./Navbar.scss";
import ButtonSecondary from "../Buttons/ButtonSecondary/ButtonSecondary";
import Logo from "./logo.png";
import React from "react";

export default function Navbar() {
	return (
		<nav className="navbar">
			<img src={Logo} alt="" className="navbar__logo"></img>
			<ButtonSecondary />
		</nav>
	);
}

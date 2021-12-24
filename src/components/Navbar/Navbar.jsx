import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setToken } from "../../redux/reducers";
import ButtonSecondary from "../Buttons/ButtonSecondary/ButtonSecondary";
import Logo from "./logo.png";
import React from "react";

export default function Navbar() {
	const token = useSelector((state) => state.user.token);
	const dispatch = useDispatch();

	return (
		<nav className="navbar">
			{token}
			<img src={Logo} alt="" className="navbar__logo"></img>
			<ButtonSecondary />
		</nav>
	);
}

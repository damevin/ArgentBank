import React from "react";
import Banner from "./img.jpeg";
import "./Header.scss";

export default function Header() {
	return (
		<header className="header">
			<section className="header__section">
				<h2 className="header__section__title">No fees.</h2>
				<h2 className="header__section__title">No minimum deposits.</h2>
				<h2 className="header__section__title">High interest rates.</h2>
				<p className="header__section__details">Open a savings account with Argent Bank today !</p>
			</section>
		</header>
	);
}

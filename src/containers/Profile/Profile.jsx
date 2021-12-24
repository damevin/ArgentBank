import React from "react";
import CardTransaction from "../../components/Cards/CardTransaction/CardTransaction";
import transactionsData from "../../data/transactions";
import "./Profile.scss";

export default function Profile() {
	return (
		<div className="profile">
			<header className="profile__header">
				<h1 className="profile__header__title">Welcome back</h1>
				<h1 className="profile__header__username">User name!</h1>
				<button className="profile__header__btn--edit">Edit name</button>
			</header>
			<section className="profile__section">
				{transactionsData.map((transaction) => {
					return <CardTransaction transaction={transaction} />;
				})}
			</section>
		</div>
	);
}

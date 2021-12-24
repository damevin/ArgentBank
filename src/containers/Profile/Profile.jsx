import React from "react";
import CardTransaction from "../../components/Cards/CardTransaction/CardTransaction";
import transactionsData from "../../data/transactions";
import "./Profile.scss";

export default function Profile() {
	return (
		<div className="profile">
			<header>
				<h1>Welcome back</h1>
				<h1>User name!</h1>
				<button>Edit name</button>
			</header>
			<section className="profile__section">
				{transactionsData.map((transaction) => {
					return <CardTransaction transaction={transaction} />;
				})}
			</section>
		</div>
	);
}

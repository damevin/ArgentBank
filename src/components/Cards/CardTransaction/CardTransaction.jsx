import React from "react";
import "./CardTransaction.scss";

const formatter = new Intl.NumberFormat('en-US', {
 style: 'currency',
 currency: 'USD',
 minimumFractionDigits: 2
})

export default function CardTransaction({ transaction }) {
	return (
		<div className="account">
			<h3 className="account__title">Argent Bank {transaction.type}</h3>
			<p className="account__amount">{formatter.format(transaction.amount)}</p>
			<p className="account__amount-description">Available {transaction.balance}</p>
			<button className="account__btn">View transactions</button>
		</div>
	);
}

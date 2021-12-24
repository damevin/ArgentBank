import React from "react";
import "./CardReinsurance.scss";

export default function CardReinsurance({ reinssurance }) {
	return (
		<div class="feature-item">
			<img src={reinssurance.icon} alt={reinssurance.iconDescription} class="feature-icon" />
			<h3 class="feature-item-title">{reinssurance.title}</h3>
			<p>{reinssurance.description}</p>
		</div>
	);
}

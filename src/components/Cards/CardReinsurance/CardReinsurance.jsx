import React from "react";
import "./CardReinsurance.scss";

export default function CardReinsurance({ reinssurance }) {
	return (
		<div className="feature">
			<img src={reinssurance.icon} alt={reinssurance.iconDescription} className="feature__icon" />
			<h3 className="feature__title">{reinssurance.title}</h3>
			<p className="feature__description">{reinssurance.description}</p>
		</div>
	);
}

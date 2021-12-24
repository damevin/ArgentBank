import React from "react";
import Header from "../../components/Header/Header";
import reinssuranceData from "../../data/reinsurrance.js";
import CardReinsurance from "../../components/Cards/CardReinsurance/CardReinsurance";
import "./Home.scss";

export default function Home() {
	return (
		<div className="home">
			<Header />
			<section className="home__section">
				{reinssuranceData.map((card) => {
					return <CardReinsurance reinssurance={card} />;
				})}
			</section>
		</div>
	);
}

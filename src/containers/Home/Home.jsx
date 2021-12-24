import React from "react";
import Header from "../../components/Header/Header";
import reinssuranceData from "../../data/reinsurrance.js";
import CardReinsurance from "../../components/Cards/CardReinsurance/CardReinsurance";

export default function Home() {
	return (
		<div>
			<Header />
			<section>
				{reinssuranceData.map((card) => {
					return <CardReinsurance reinssurance={card} />;
				})}
			</section>
		</div>
	);
}

import Navbar from "./components/Navbar/Navbar.jsx";
import Router from "./router";
import Footer from "./components/Footer/Footer.jsx";
import React from "react";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Router />
			<Footer />
		</div>
	);
}

export default App;

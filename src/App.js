import Navbar from "./components/Navbar/Navbar.jsx";
import Router from "./router";
import Footer from "./components/Footer/Footer.jsx";
import React from "react";

import { Provider } from "react-redux";
import { store } from "../src/redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Navbar />
				<Router />
				<Footer />
			</div>
		</Provider>
	);
}

export default App;

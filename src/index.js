import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ReactDOM from "react-dom";

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root")
);

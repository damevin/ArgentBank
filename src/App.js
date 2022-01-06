import Navbar from "./components/Navbar/Navbar.jsx";
import Router from "./router";
import Footer from "./components/Footer/Footer.jsx";
import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "./redux/middlewares/user";
import { useEffect } from "react";

function App({ token, fetchUser, user, setUserData }) {
	useEffect(() => {
		const localStorageToken = localStorage.getItem("token");
		if (localStorageToken || token) {
			const query = {
				method: "POST",
				endPoint: "profile",
				token: localStorageToken || token,
			};
			fetchUser(query);
		}
	}, [token, fetchUser]);

	return (
		<div className="App">
			<Navbar />
			<Router />
			<Footer />
		</div>
	);
}

const mapStateToProps = ({ token, user}) => {
	return {
		token,
		user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUser: (...args) => dispatch(fetchUser(...args)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import "./Navbar.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { USER_LOGOUT } from "../../redux/actions";
import ButtonSecondary from "../Buttons/ButtonSecondary/ButtonSecondary";
import Logo from "./logo.png";
import React from "react";

const Navbar = ({ token, user, userLogout }) => {
	return (
		<nav className="navbar">
			<Link to="/">
				<img src={Logo} alt="" className="navbar__logo"></img>
			</Link>
			{token ? (
				<>
					<Link to="/profile">
						<button>{user.firstName}</button>
					</Link>
					<button onClick={() => userLogout()}>Logout</button>
				</>
			) : (
				<Link to="/login">
					<ButtonSecondary type="login" />
				</Link>
			)}
		</nav>
	);
};

const mapStateToProps = ({ token, user }) => {
	return {
		token,
		user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		userLogout: () => dispatch({ type: USER_LOGOUT }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

import "./Navbar.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { USER_LOGOUT } from "../../redux/actions";
import Logo from "./logo.png";
import React from "react";

const Navbar = ({ token, user, userLogout }) => {
	return (
		<nav className="navbar">
			<Link to="/">
				<img src={Logo} alt="" className="navbar__logo"></img>
			</Link>
			{token ? (
				<aside className="navbar__aside">
					<Link to="/profile">
						<button className="btn">
							<UserIcon className="btn__icon"  />
							{user.firstName}
						</button>
					</Link>
					<button onClick={() => userLogout()} className="btn">
						<LogoutIcon className="btn__icon" />
						Sign Out
					</button>
				</aside>
			) : (
				<Link to="/login">
					<button className="btn">
						<UserIcon className="btn__icon"  />
						Sign In
					</button>
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

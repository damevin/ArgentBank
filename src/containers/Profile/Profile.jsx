import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { useState } from "react";
import { useRef } from "react";
import { fetchUser } from "../../redux/middlewares/user";
import { setUserData } from "../../redux/middlewares/userData";
import CardTransaction from "../../components/Cards/CardTransaction/CardTransaction";
import transactionsData from "../../data/transactions";
import "./Profile.scss";

const Profile = ({ token, user, setUserData, fetchUser }) => {
	const inputEditFirstName = useRef();
	const inputEditLastName = useRef();
	const [toggle, setToggle] = useState(false);

	const toggleEditMode = () => {
		setToggle(!toggle);
	};

	const handleUserChanges = () => {
		const query = {
			method: "POST",
			endPoint: "profile",
			token: token,
		};
		fetchUser(query);
	};

	const submitUserEditForm = (event) => {
		event.preventDefault();
		const query = {
			method: "PUT",
			endPoint: "profile",
			body: {
				firstName: inputEditFirstName.current.value,
				lastName: inputEditLastName.current.value,
			},
			token: token,
		};

		setUserData(query);
		toggleEditMode();
		handleUserChanges();
	};

	if (!token) {
		return <Navigate to="/" />;
	}

	return (
		<div className="profile">
			<header className="profile__header">
				<h1 className="profile__header__title">Welcome back</h1>
				{toggle === false ? (
					<>
						<h1 className="profile__header__username">
							{user.firstName} {user.lastName} {setUserData}
						</h1>
						<button className="profile__header__btn--edit" onClick={() => toggleEditMode()}>
							Edit name
						</button>
					</>
				) : (
					<form onSubmit={submitUserEditForm} className="form">
						<input className="form__input" placeholder={user.firstName} ref={inputEditFirstName}></input>
						<input className="form__input" placeholder={user.lastName} ref={inputEditLastName}></input>
						<button type="submit" className="btn__save">
							Save
						</button>
						<button className="btn__cancel" onClick={() => toggleEditMode()}>
							Cancel
						</button>
					</form>
				)}
			</header>
			<section className="profile__section">
				{transactionsData.map((transaction) => {
					return <CardTransaction transaction={transaction} key={transaction._id} />;
				})}
			</section>
		</div>
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
		fetchUser: (...args) => dispatch(fetchUser(...args)),
		setUserData: (...args) => dispatch(setUserData(...args)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

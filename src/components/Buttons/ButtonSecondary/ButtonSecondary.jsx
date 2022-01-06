import "./ButtonSecondary.scss";
import { ReactComponent as LogoutIcon } from "../icons/logout.svg";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import React from "react";

export default function ButtonSecondary(props) {
	const getSecondaryButton = () => {
		if (props.type === "login") {
			return (
				<button className="btn__secondary">
					<UserIcon className="btn__icon" />
					<span>Sign In</span>
				</button>
			);
		} else if (props.type === "logout") {
			return (
				<button>
					<span>Sign out</span>
				</button>
			);
		} else if (props.type === "user") {
			return (
				<button>
					<span>User</span>
				</button>
			);
		}
	};

	return <div>{getSecondaryButton()}</div>;
}

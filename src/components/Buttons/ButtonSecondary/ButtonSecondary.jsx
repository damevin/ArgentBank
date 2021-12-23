import "./ButtonSecondary.scss";
import { ReactComponent as LogoutIcon } from "../icons/logout.svg";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import React from "react";

export default function ButtonSecondary() {
	return (
		<button className="btn__secondary">
			<UserIcon className="btn__icon" />
			<span>Sign In</span>
		</button>
	);
}

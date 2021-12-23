import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Profile from "./containers/Profile/Profile";
import Error from "./containers/Error/Error";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/profile" element={<Profile />}></Route>
			<Route path="*" element={<Error />}></Route>
		</Routes>
	);
};

export default Router;

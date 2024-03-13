import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/global/Header";
import Admin from "./Admin";
import Profile from "./pages/Profile";
import Docs from "./pages/Docs";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/about" Component={About} />
				<Route path="/admin" Component={Admin} />
				<Route path="/docs" Component={Docs} />
				<Route path="/auth/signup" Component={SignUp} />
				<Route path="/auth/signin" Component={SignIn} />
				<Route path="/user/profile" Component={Profile} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

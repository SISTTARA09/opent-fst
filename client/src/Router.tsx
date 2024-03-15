import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/global/Header";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Docs from "./pages/Docs";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";
// import Welcome from "./pages/Welcome";
import Confirm from "./pages/Confirm";

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{/* <Route path="/welcome" Component={Welcome} /> */}
				{/* start protected routes  */}
				<Route path="/about" Component={About} />
				<Route path="/" Component={Home} />
				<Route path="/docs" Component={Docs} />
				<Route path="/admin" Component={Admin} />
				<Route path="/auth/signup" Component={SignUp} />
				<Route path="/auth/signin" Component={SignIn} />
				<Route path="/user/profile" Component={Profile} />
				{/* end protected routes  */}

				{/* start confirmation route  */}

				<Route path="/auth/confirm/:activationcode" Component={Confirm} />

				{/* end confirmation route  */}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

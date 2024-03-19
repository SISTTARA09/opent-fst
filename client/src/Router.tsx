import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/public/About";
import Home from "./pages/public/Home";
import Header from "./components/global/Header";
import Admin from "./pages/Admin";
import Profile from "./pages/private/Profile";
import Docs from "./pages/private/Docs";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";
// import Welcome from "./pages/Welcome";
import Confirm from "./pages/Auth/Confirm";
import Module from "./pages/private/Module";
import Videos from "./pages/private/Videos";
import VideoContext from "./contexts/videos/VideoContext";
import ModuleContext from "./contexts/videos/ModuleContext";

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{/* start public  */}
				<Route path="/about" Component={About} />
				<Route path="/" Component={Home} />
				<Route path="/admin" Component={Admin} />
				{/* end public  */}

				{/* start private  */}
				<Route path="/docs" Component={Docs} />
				<Route path="/docs/:module/:session" Component={Module} />
				<Route
					path="/videos/:session"
					element={
						<ModuleContext>
							<VideoContext>
								<Videos />
							</VideoContext>
						</ModuleContext>
					}
				/>
				{/* <Route path="/videos/:module/:session" Component={Module} /> */}
				<Route path="/user/profile" Component={Profile} />
				{/* end private  */}

				{/* start auth  */}
				<Route path="/auth/signup" Component={SignUp} />
				<Route path="/auth/signin" Component={SignIn} />
				<Route path="/auth/confirm/:activationcode" Component={Confirm} />
				{/* end auth  */}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

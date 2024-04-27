import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/public/About";
import Home from "./pages/public/Home";
import Header from "./components/global/Header";
import Profile from "./pages/personal/Profile";
import Docs from "./pages/personal/Docs";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import Confirm from "./pages/Auth/Confirm";
import Module from "./pages/personal/Module";
import Videos from "./pages/personal/Videos";
import VideoContext from "./contexts/videos/VideoContext";
import ModuleContext from "./contexts/videos/ModuleContext";
import Admin from "./pages/admin/Admin";
import AddDoc from "./pages/admin/add/Doc";
import AddDocs from "./pages/admin/add/Docs";
import AddVideo from "./pages/admin/add/Video";
import AddPlaylist from "./pages/admin/add/Playlist";
import Footer from "./components/global/Footer";
import DeleteDoc from "./pages/admin/delete/Doc";
import DeleteVideo from "./pages/admin/delete/Video";

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

				{/* start personal  */}
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
				{/* end personal  */}

				{/* start auth  */}
				<Route path="/auth/signup" Component={SignUp} />
				<Route path="/auth/signin" Component={SignIn} />
				<Route path="/auth/confirm/:activationcode" Component={Confirm} />
				{/* end auth  */}

				{/* start Admin  */}

				<Route path="/admin" element={<Admin />} />
				<Route path="/admin/add/doc" Component={AddDoc} />
				<Route path="/admin/add/docs" Component={AddDocs} />
				<Route path="/admin/add/video" Component={AddVideo} />
				<Route path="/admin/add/playlist" Component={AddPlaylist} />

				<Route path="/admin/delete/doc" Component={DeleteDoc} />
				<Route path="/admin/delete/video" Component={DeleteVideo} />

				{/* end Admin  */}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;

import { useContext } from "react";
import { IsSignedContext } from "../../contexts/AuthContext";
import NotAuth from "../../components/global/NotAuth";
import { Link } from "react-router-dom";

const Admin = () => {
	const { isSigned, user } = useContext(IsSignedContext);

	return isSigned ? (
		<div>
			<h1>Hi, {user?.user.fName}</h1>

			<Link to="/admin/add/playlist">
				<h3>Add a Playlist </h3>
			</Link>
			<Link to="/admin/add/video">
				<h3>Add a Video to A Playlist </h3>
			</Link>

			<Link to="/admin/add/docs">
				<h3>Add a Documents Module </h3>
			</Link>
			<Link to="/admin/add/doc">
				<h3>Add a Document </h3>
			</Link>
		</div>
	) : (
		<NotAuth />
	);
};

export default Admin;

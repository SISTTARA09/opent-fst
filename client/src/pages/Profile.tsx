import { useContext, useEffect } from "react";
import { IsSignedContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
	const { isSigned, user } = useContext(IsSignedContext);

	const navigate = useNavigate();
	useEffect(() => {
		const subscribe = setTimeout(() => {
			if (!isSigned) {
				navigate("/auth/signin");
			}
		}, 100);
		return () => clearTimeout(subscribe);
	}, []);

	return isSigned && <div>hello {user?.user.fName}</div>;
};

export default Profile;

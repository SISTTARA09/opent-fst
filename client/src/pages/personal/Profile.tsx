import { useContext } from "react";
import { IsAuthContext } from "../../contexts/AuthContext";
import NotAuth from "../../components/global/NotAuth";

const Profile = () => {
	const { isAuth: isSigned, user } = useContext(IsAuthContext);

	return isSigned ? <div>hello {user?.user.fName}</div> : <NotAuth />;
};

export default Profile;

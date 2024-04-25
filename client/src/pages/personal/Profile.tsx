import { useContext } from "react";
import { IsSignedContext } from "../../contexts/AuthContext";
import NotAuth from "../../components/global/NotAuth";

const Profile = () => {
	const { isSigned, user } = useContext(IsSignedContext);

	return isSigned ? <div>hello {user?.user.fName}</div> : <NotAuth />;
};

export default Profile;

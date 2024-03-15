import { useContext } from "react";
import { IsSignedContext } from "../contexts/AuthContext";
import NotAuth from "../components/global/NotAuth";

const Docs = () => {
	const { isSigned, user } = useContext(IsSignedContext);

	if (typeof isSigned !== "boolean") return <></>;

	return isSigned ? (
		<div>hello {user?.user.fName}; to your docs </div>
	) : (
		<NotAuth />
	);
};

export default Docs;

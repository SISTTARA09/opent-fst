import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IsSignedContext } from "../contexts/AuthContext";

const Welcome = () => {
	const { isSigned } = useContext(IsSignedContext);

	const navigate = useNavigate();

	// protect from navigating to in case user is signed
	useEffect(() => {
		if (isSigned) {
			const path = localStorage.getItem("path");
			navigate(path);
		}
	}, [isSigned, navigate]);
	///

	return (
		<div>
			<h1>Welcome</h1>
			{!isSigned && (
				<>
					<NavLink
						className="capitalize hover:pl-5 text-white sm:hover:pl-4 w-full pl-4 p-2 duration-200"
						to={"/auth/signin"}
					>
						sign in
					</NavLink>
					<NavLink
						className="capitalize hover:pl-5 text-white sm:hover:pl-4 w-full pl-4 p-2 duration-200"
						to={"/auth/signup"}
					>
						sign up
					</NavLink>
				</>
			)}
		</div>
	);
};

export default Welcome;

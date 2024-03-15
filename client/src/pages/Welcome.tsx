import { NavLink } from "react-router-dom";

const Welcome = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<>
				<NavLink
					className="capitalize hover:pl-5 text-white sm:hover:pl-4 w-full pl-4 p-2 duration-200"
					to={"/auth/signin"}
				>
					sign-in
				</NavLink>
				<NavLink
					className="capitalize hover:pl-5 text-white sm:hover:pl-4 w-full pl-4 p-2 duration-200"
					to={"/auth/signup"}
				>
					sign-up
				</NavLink>
			</>
		</div>
	);
};

export default Welcome;

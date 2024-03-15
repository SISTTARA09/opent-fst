import { NavLink } from "react-router-dom";

const NotAuth = () => {
	return (
		<div>
			<h1>sign-in please,</h1>
			<div className="flex gap-3">
				<h3>
					<NavLink to="/auth/signin" className="font-semibold text-main">
						sign-in
					</NavLink>
				</h3>
				<h3>
					<NavLink to="/auth/signup" className="font-semibold text-main">
						sign-up
					</NavLink>
				</h3>
			</div>
		</div>
	);
};

export default NotAuth;

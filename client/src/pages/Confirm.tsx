import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Confirm = () => {
	const [isShow, setIsShow] = useState<boolean | null>(null);

	const { activationcode } = useParams();
	useEffect(() => {
		const fetchUser = async () => {
			const response = await fetch(
				`http://localhost:4000/auth/confirm/${activationcode}`
			);
			const data = await response.json();
			if (data.success) {
				setIsShow(true);
			}
			if (data.error) {
				setIsShow(false);
			}
		};
		fetchUser();
	}, []);

	// if verificated
	if (isShow) {
		setTimeout(() => {
			location.assign("/auth/signin");
		}, 2500);
		///

		return (
			<>
				<h1>successfully verified:{")"}</h1>
				<h3>navigating to sign in...</h3>
			</>
		);
	}

	return (
		isShow === false && (
			<div>
				<h1>verification failed!!</h1>
				<h3>
					please
					<NavLink className="text-blue-700" to="/auth/signup">
						sign-up
					</NavLink>
				</h3>
			</div>
		)
	);
};

export default Confirm;

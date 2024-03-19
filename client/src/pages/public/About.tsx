import { useContext, useEffect } from "react";
import { IsSignedContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const About = () => {
	const { isSigned } = useContext(IsSignedContext);
	const navigate = useNavigate();

	// unshoww the imediate on reload  & if is not signed redirect to "signin"
	useEffect(() => {
		const subscribe = setTimeout(() => {
			if (!isSigned) {
				navigate("/auth/signin");
			}
		}, 100);
		return () => clearTimeout(subscribe);
	});
	///

	return <div>About</div>;
};

export default About;

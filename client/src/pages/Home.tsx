import Footer from "../components/global/Footer";
import Branches from "../components/home/Branches";
import Landing from "../components/home/Landing";
import Clubs from "../components/home/Clubs";
import { useContext, useEffect } from "react";
import { IsSignedContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const { isSigned } = useContext(IsSignedContext);
	const navigate = useNavigate();

	// go to '/welcome' if user is not signed
	useEffect(() => {
		if (!isSigned) {
			const subscribe = setTimeout(() => {
				navigate("/welcome");
			}, 100);
			return () => clearTimeout(subscribe);
		}
	}, [isSigned, navigate]);
	///

	return (
		isSigned && (
			<main>
				<Landing />
				<Clubs />
				<Branches />
				<Footer />
			</main>
		)
	);
};

export default Home;

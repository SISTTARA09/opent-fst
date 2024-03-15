import Footer from "../components/global/Footer";
import Branches from "../components/home/Branches";
import Landing from "../components/home/Landing";
import Clubs from "../components/home/Clubs";
import { useContext } from "react";
import { IsSignedContext } from "../contexts/AuthContext";
import Welcome from "./Welcome";

const Home = () => {
	const { isSigned } = useContext(IsSignedContext);

	// SOLVE: show imediate welcome
	if (typeof isSigned !== "boolean") return <></>;
	///

	return isSigned ? (
		<main>
			<Landing />
			<Clubs />
			<Branches />
			<Footer />
		</main>
	) : (
		<Welcome />
	);
};

export default Home;

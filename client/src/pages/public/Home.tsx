import Footer from "../../components/global/Footer";
import Branches from "../../components/home/Branches";
import Landing from "../../components/home/Landing";
import Clubs from "../../components/home/Clubs";
import { useContext } from "react";
import { IsSignedContext } from "../../contexts/AuthContext";
import SignHeader from "../../components/global/SignHeader";

const Home = () => {
	const { isSigned } = useContext(IsSignedContext);

	// SOLVE: show imediate welcome
	if (isSigned === null) return <></>;
	///

	return (
		<main>
			{!isSigned && <SignHeader />}
			<Landing />
			<Clubs />
			<Branches />
			<Footer />
		</main>
	);
};

export default Home;

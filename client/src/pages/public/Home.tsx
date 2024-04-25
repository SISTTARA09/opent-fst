import Footer from "../../components/global/Footer";
import Branches from "../../components/home/Branches";
import Landing from "../../components/home/Landing";
import Clubs from "../../components/home/Clubs";
// import { useContext } from "react";
// import { IsAuthContext } from "../../contexts/AuthContext";
// import SignHeader from "../../components/global/SignHeader";
// import Header from "../../components/global/Header";

const Home = () => {
	// const { isSigned } = useContext(IsAuthContext);

	// // SOLVE: show imediate welcome
	// if (isSigned === null) return <></>;
	// ///

	return (
		<main>
			{/* {!isSigned && <SignHeader />} */}
			{/* <Header /> */}
			<Landing />
			<Clubs />
			<Branches />
			<Footer />
		</main>
	);
};

export default Home;

import Footer from "../components/global/Footer";
import Branches from "../components/home/Branches";
import Landing from "../components/home/Landing";
import Clubs from "../components/home/Clubs";

const Home = () => {
	return (
		<main>
			<Landing />
			<Clubs />
			<Branches />
			<Footer />
		</main>
	);
};

export default Home;

import { FlightPickerContainer } from "./components";
import { Container } from "../../components";
import '../../sass/pages/Home.scss'

const Home = () => {
	return (
		<Container className="home">
			<FlightPickerContainer/>
		</Container>
	);
};

export default Home;

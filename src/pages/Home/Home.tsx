import { useEffect } from "react";
import { getFlights } from "../../services";

const Home = () => {

	const consoleFlight = async () => await getFlights();

	useEffect(() => {
		consoleFlight();
	}, [])

	return (
		<div>
			Home
		</div>
	);
};

export default Home;

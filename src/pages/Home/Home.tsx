import { FlightPicker } from "./components";

const Home = () => {
	return (
		<div>
			{/* CREATE A CAROUSEL */}
			<FlightPicker items={[{name: 'argentina'}, {name: 'brasil'}]}/>
		</div>
	);
};

export default Home;

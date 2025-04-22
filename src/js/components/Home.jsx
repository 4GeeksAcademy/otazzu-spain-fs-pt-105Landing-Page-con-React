import React from "react";
import {Card} from "./Card"

const Home = () => {
	return (
		<div className="container-fluid">
			<div className="row justify-content-around">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Card } from "./Card";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid w-75">
				<Header />
				<div className="justify-content-evenly">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
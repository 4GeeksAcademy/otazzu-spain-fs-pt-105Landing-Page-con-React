import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Card } from "./Card";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid w-75 min-vh-100">
				<Header />
				<div className="row justify-content-around">
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
import React from "react";
import Image from "./Img.png";
import CardList from "./CardList";
import cardsData from "./cardsData.json";
import Footer from "./Footer";

function Home() {
	return (
		<div className="container">
			<img className="img-board" src={Image} alt="l'eau" />
			<CardList className="cards" cards={cardsData} />
			<Footer />
		</div>
	);
}

export default Home;

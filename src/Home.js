import React from "react";
import ImageAccueil from "./Img.png";
import CardList from "./CardList";
import cardsData from "./cardsData.json";
import Footer from "./Footer";

function Home() {
	return (
		<div className="container">
			<div className="container-img">
				<h1>Chez vous, partout et ailleurs</h1>
				<img className="img-board" src={ImageAccueil} alt="l'eau" />
			</div>
			<CardList className="cards" cards={cardsData} />
			<Footer />
		</div>
	);
}

export default Home;

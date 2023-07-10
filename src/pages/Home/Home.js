import React from "react";
import ImageAccueil from "../../assets/Img.png";
import CardList from "../../components/Card/CardList";
import cardsData from "../../cardsData.json";
import Footer from "../../components/Footer/Footer";

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

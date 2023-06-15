import React from "react";
import { useParams } from "react-router-dom";
import cardsData from "../cardsData.json";
import Footer from "./Footer";

function CardDetail() {
	const { id } = useParams();

	const card = cardsData.find((card) => card.id === id);

	if (!card) {
		return <div>Cette carte n'existe pas.</div>;
	}

	return (
		<>
			<h2>{card.title}</h2>
			<img src={card.cover} alt={card.title} />
			<h3>{card.location}</h3>
			<div>
				<img src={card.host.picture} alt={card.host.name} />
				<p>{card.host.name}</p>
			</div>
			<div>{card.rating}</div>
			<div>
				<ul>
					{card.tags.map((tag, i) => (
						<li key={i}>{tag}</li>
					))}
				</ul>
			</div>
			<Footer />
		</>
	);
}

export default CardDetail;

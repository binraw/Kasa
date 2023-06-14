import React from "react";
import { useParams } from "react-router-dom";
import cardsData from "../cardsData.json";

function CardDetail() {
	const { id } = useParams();

	const card = cardsData.find((card) => card.id === id);

	if (!card) {
		return <div>Cette carte n'existe pas.</div>;
	}

	return (
		<div>
			<h2>Title: {card.title}</h2>
			<p>Description: {card.description}</p>
			<img src={card.cover} alt={card.title} />
		</div>
	);
}

export default CardDetail;

import React from "react";
import Card from "./Card";

function CardList({ cards }) {
	return (
		<div className="card-list">
			{cards.map((card) => (
				<Card key={card.id} title={card.title} cover={card.cover} />
			))}
		</div>
	);
}

export default CardList;

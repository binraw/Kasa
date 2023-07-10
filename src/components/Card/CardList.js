import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardList({ cards }) {
	return (
		<div className="card-list">
			{cards.map((card, index) => (
				<Link key={card.id} to={`/card/${card.id}`}>
					<Card
						key={card.id}
						title={card.title}
						cover={card.cover}
						index={index}
					/>
				</Link>
			))}
		</div>
	);
}

export default CardList;

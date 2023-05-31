import React from "react";

function Card({ title, cover }) {
	return (
		<div className="card">
			<div className="card-image">
				<img className="img-cards" src={cover} alt={title} />
				<h3 className="card-title">{title}</h3>
			</div>
		</div>
	);
}

export default Card;

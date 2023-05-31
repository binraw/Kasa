import React from "react";
import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
	return (
		<div className="card">
			<Link to={`/card/${id}`}>
				<div className="card-image">
					<img className="img-cards" src={cover} alt={title} />
					<h3 className="card-title">{title}</h3>
				</div>
			</Link>
		</div>
	);
}

export default Card;

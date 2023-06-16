import React from "react";
import { useParams, Route } from "react-router-dom";
import cardsData from "../../cardsData.json";
import Footer from "../../components/Footer";
import stars from "../../stars.png";
import starsgris from "../../starsgris.png";
import Carrousel from "../../components/Carrousel";
import IconVector from "../../Vector.png";

import NotFound from "../../NotFound";

function CardDetail() {
	const { id } = useParams();

	const card = cardsData.find((card) => card.id === id);

	if (!card) {
		return <Route path="*" element={<NotFound />} />;
	}
	const maxRating = 5; // Nombre maximum d'étoiles
	const rating = Math.round(card.rating); // Arrondi de la note
	const filledStars = rating > 0 ? rating : 0; // Nombre d'étoiles pleines
	const emptyStars = maxRating - filledStars; // Nombre d'étoiles vides
	const dataCarrouselCard = [
		{
			title: "Description",
			description: card.description,
			img: IconVector,
			id: 1,
		},
		{
			title: "Equipement",
			description: card.equipments,
			img: IconVector,
			id: 1,
		},
	];
	return (
		<div className="container">
			<img className="img-card" src={card.cover} alt={card.title} />
			<div className="container-card">
				<div className="person-card">
					<img
						className="imghost-card"
						src={card.host.picture}
						alt={card.host.name}
					/>
					<p className="hostname-card">{card.host.name}</p>
				</div>
				<h2 className="title-card">{card.title}</h2>
				<h3 className="location-card">{card.location}</h3>

				<div className="container-stars">
					{Array(filledStars)
						.fill()
						.map((_, index) => (
							<img
								className="filled-star"
								key={index}
								src={stars}
								alt="star"
							></img>
						))}
					{Array(emptyStars)
						.fill()
						.map((_, index) => (
							<img
								className="empty-star"
								key={index}
								src={starsgris}
								alt="star grey"
							></img>
						))}
				</div>
				<div>
					<ul className="container-tags">
						{card.tags.map((tag, i) => (
							<li className="tag-card" key={i}>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<div className="container-carrousel">
					<Carrousel data={dataCarrouselCard} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default CardDetail;
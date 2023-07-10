import React from "react";
import { useParams } from "react-router-dom";
import cardsData from "../../cardsData.json";
import Footer from "../../components/Footer";
import stars from "../../assets/stars.png";
import starsgris from "../../assets/starsgris.png";
import DropdownButton from "../../components/DropdownButton";
import IconVector from "../../assets/Vector.png";
import Slider from "../../components/Slider";
import NotFound from "../NotFound/NotFound";

function Product() {
	const { id } = useParams();

	const card = cardsData.find((card) => card.id === id);

	if (!card) {
		return <NotFound />;
	}

	const maxRating = 5;
	const rating = Math.round(card.rating);
	const filledStars = rating > 0 ? rating : 0;
	const emptyStars = maxRating - filledStars;
	const elementDataDescription = [
		{
			title: "Description",
			description: card.description,
			img: IconVector,
			id: 1,
		},
	];
	const elementDataEquipement = [
		{
			title: "Equipement",

			description:
				card.equipments &&
				card.equipments.map((equip, i) => (
					<ul className="equipement-ul" key={i}>
						<li className="equipement-description">{equip}</li>
					</ul>
				)),
			img: IconVector,
			id: 1,
		},
	];
	const pictures = card.pictures;
	return (
		<div className="container">
			<div className="container-detail-card">
				<Slider pictures={pictures} />
			</div>
			<div className="container-card">
				<div className="container-title">
					<h2 className="title-card">{card.title}</h2>
					<h3 className="location-card">{card.location}</h3>
				</div>

				<div className="person-card">
					<img
						className="imghost-card"
						src={card.host.picture}
						alt={card.host.name}
					/>
					<p className="hostname-card">{card.host.name}</p>
				</div>

				<ul className="container-tags">
					{card.tags.map((tag, i) => (
						<li className="tag-card" key={i}>
							{tag}
						</li>
					))}
				</ul>

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
			</div>
			<div className="structure-card-detail">
				<DropdownButton data={elementDataDescription} />
				<DropdownButton data={elementDataEquipement} />
			</div>

			<Footer />
		</div>
	);
}

export default Product;

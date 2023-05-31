// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function CardDetail() {
// 	const { id } = useParams();
// 	const [card, setCard] = useState(null);

// 	useEffect(() => {
// 		// Fonction pour récupérer les données du fichier JSON
// 		const fetchCardData = async () => {
// 			const response = await fetch("./cardsData.json");
// 			const data = await response.json();
// 			const cardData = data.find((card) => card.id === parseInt(id));

// 			if (cardData) {
// 				setCard(cardData);
// 			} else {
// 				// Carte non trouvée
// 				console.log("Carte non trouvée");
// 			}
// 		};

// 		fetchCardData();
// 	}, [id]);

// 	return (
// 		<div>
// 			<h2>{card.title}</h2>
// 			<p>{card.description}</p>
// 		</div>
// 	);
// }

// export default CardDetail;

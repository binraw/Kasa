import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cardsData from "../cardsData.json";

function Slider(props) {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const navigate = useNavigate();

	const handleClickNext = () => {
		let nextIndex = currentCardIndex + 1;
		if (nextIndex >= cardsData.length) {
			nextIndex = 0;
		}
		setCurrentCardIndex(nextIndex);
		handleRedirect(cardsData[nextIndex].id);
	};

	const handleClickPrevious = () => {
		let previousIndex = currentCardIndex - 1;
		if (previousIndex < 0) {
			previousIndex = cardsData.length - 1;
		}
		setCurrentCardIndex(previousIndex);
		handleRedirect(cardsData[previousIndex].id);
	};

	const handleRedirect = (id) => {
		navigate(`/card/${id}`);
	};

	return (
		<div>
			{/* Votre code pour le composant Slider */}
			<button onClick={handleClickPrevious}>Précédent</button>
			<button onClick={handleClickNext}>Suivant</button>
		</div>
	);
}

export default Slider;

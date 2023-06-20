import React from "react";

function Slider(props) {
	const handleClickNext = () => {
		props.handleClickNext();
	};

	const handleClickPrevious = () => {
		props.handleClickPrevious();
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

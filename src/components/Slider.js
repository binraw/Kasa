import React from "react";
import { useNavigate } from "react-router-dom";

function Slider(props) {
	const navigate = useNavigate();

	const handleClickNext = () => {
		props.handleClickNext();
		handleRedirect();
	};

	const handleClickPrevious = () => {
		props.handleClickPrevious();
		handleRedirect();
	};

	const handleRedirect = () => {
		navigate("/card/f72a452f");
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

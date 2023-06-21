import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cardsData from "../cardsData.json";
import ArrowR from "../fleched.png";
import ArrowL from "../flecheg.png";

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
			<button className="btn-change" onClick={handleClickPrevious}>
				<img className="arrow-left" src={ArrowL} alt="arrow pass card" />
			</button>
			<button className="btn-change" onClick={handleClickNext}>
				<img className="arrow-right" src={ArrowR} alt="arrow next card" />
			</button>
		</div>
	);
}

export default Slider;

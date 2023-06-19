import { useState } from "react";
import cardsData from "../cardsData.json";

function useCardCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClickNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
	};

	return {
		currentIndex,
		handleClickNext,
	};
}

export default useCardCarousel;

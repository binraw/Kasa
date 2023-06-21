import React, { useState } from "react";
import ArrowR from "../fleched.png";
import ArrowL from "../flecheg.png";

function Slider(props) {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	const handleClickNext = () => {
		let nextIndex = currentCardIndex + 1;
		if (nextIndex >= props.pictures.length) {
			nextIndex = 0;
		}
		setCurrentCardIndex(nextIndex);
	};

	const handleClickPrevious = () => {
		let previousIndex = currentCardIndex - 1;
		if (previousIndex < 0) {
			previousIndex = props.pictures.length - 1;
		}
		setCurrentCardIndex(previousIndex);
	};

	return (
		<>
			<div>
				<img
					className="cover-detail"
					src={props.pictures[currentCardIndex]}
					alt="arrow pass card"
				/>
				<div>
					<button className="btn-change" onClick={handleClickPrevious}>
						<img className="arrow-left" src={ArrowL} alt="arrow pass card" />
					</button>
					<button className="btn-change" onClick={handleClickNext}>
						<img className="arrow-right" src={ArrowR} alt="arrow next card" />
					</button>
				</div>
			</div>
		</>
	);
}

export default Slider;

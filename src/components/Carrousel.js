import React, { useState } from "react";

function Carrousel({ data }) {
	const [isParagraphVisible, setIsParagraphVisible] = useState(
		Array(data.length).fill(true)
	);

	const handleContainerClick = (index) => {
		const updatedVisibility = [...isParagraphVisible];
		updatedVisibility[index] = !updatedVisibility[index];
		setIsParagraphVisible(updatedVisibility);
	};

	return (
		<div>
			{data.map((item, index) => (
				<div
					className="container"
					key={item.id}
					onClick={() => handleContainerClick(index)}
				>
					<ul className="description-about">
						<li>
							<h3>{item.title}</h3>
							<img
								className={
									isParagraphVisible[index]
										? "icon-arrow"
										: "icon-arrow-transform"
								}
								src={item.img}
								alt="icon arrow"
							/>
						</li>
						{isParagraphVisible[index] && (
							<li className="description">
								<p>{item.description}</p>
							</li>
						)}
					</ul>
				</div>
			))}
		</div>
	);
}

export default Carrousel;
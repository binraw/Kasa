import React, { useState } from "react";

function DropdownButton({ data }) {
	const [isParagraphVisible, setIsParagraphVisible] = useState(
		Array(data.length).fill(false)
	);

	const handleContainerClick = (index) => {
		const updatedVisibility = [...isParagraphVisible];
		updatedVisibility[index] = !updatedVisibility[index];
		setIsParagraphVisible(updatedVisibility);
	};

	return (
		<>
			<div className="container-carrousel-main">
				{data.map((item, index) => (
					<div
						className="drop-structure"
						key={item.id}
						onClick={() => handleContainerClick(index)}
					>
						<ul className="description-about">
							<li className="elem-drop">
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
								<div className="description">
									<div className="item-description">{item.description}</div>
								</div>
							)}
						</ul>
					</div>
				))}
			</div>
		</>
	);
}

export default DropdownButton;

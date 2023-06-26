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
					<div key={item.id} onClick={() => handleContainerClick(index)}>
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
									<p className="item-description">{item.description}</p>
								</li>
							)}
						</ul>
					</div>
				))}
			</div>
		</>
	);
}

export default DropdownButton;

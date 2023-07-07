import React from "react";
import ImgAbout from "../../assets/ImgAbout.png";
import IconVector from "../../assets/Vector.png";
import Footer from "../../components/Footer";
import DropdownButton from "../../components/DropdownButton";

function About() {
	const carrouselData1 = [
		{
			title: "Fiabilité",
			description:
				"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
			img: IconVector,
			id: 1,
		},
		{
			title: "Respect",
			description:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
			img: IconVector,
			id: 2,
		},
		{
			title: "Service",
			description:
				"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
			img: IconVector,
			id: 3,
		},
		{
			title: "Sécurité",
			description:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
			img: IconVector,
			id: 4,
		},
	];
	return (
		<>
			<div className="container">
				<img className="img-about" src={ImgAbout} alt="Montagne suisse" />
				<div className="structure-about">
					<DropdownButton data={carrouselData1} />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default About;

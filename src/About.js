import React from "react";
import ImgAbout from "./ImgAbout.png";
import IconVector from "./Vector.png";
import Footer from "./Footer";

function About() {
	return (
		<div className="container">
			<img className="img-about" src={ImgAbout} alt="Montagne suisse" />
			<ul className="description-about">
				<li>
					<h3>Fiabilité</h3>
					<img className="icon-arrow" src={IconVector} alt="icon arrow" />
				</li>
				<li className="description">
					Les annonces postées sur Kasa garantissent une fiabilité totale. Les
					photos sont conformes aux logements, et toutes les informations sont
					régulièrement vérifiées par nos équipes.
				</li>
			</ul>
			<ul className="description-about">
				<li>
					<h3>Respect</h3>
					<img className="icon-arrow" src={IconVector} alt="icon arrow" />
				</li>
				<li className="description">
					La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
					comportement discriminatoire ou de perturbation du voisinage
					entraînera une exclusion de notre plateforme.
				</li>
			</ul>
			<ul className="description-about">
				<li>
					<h3>Service</h3>
					<img className="icon-arrow" src={IconVector} alt="icon arrow" />
				</li>
				<li className="description">
					Nos équipes se tiennent à votre disposition pour vous fournir une
					expérience parfaite. N'hésitez pas à nous contacter si vous avez la
					moindre question.
				</li>
			</ul>
			<ul className="description-about">
				<li>
					<h3>Sécurité</h3>
					<img className="icon-arrow" src={IconVector} alt="icon arrow" />
				</li>
				<li className="description">
					La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
					pour les voyageurs, chaque logement correspond aux critères de
					sécurité établis par nos services. En laissant une note aussi bien à
					l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
					standards sont bien respectés. Nous organisons également des ateliers
					sur la sécurité domestique pour nos hôtes.
				</li>
			</ul>
			<Footer />
		</div>
	);
}

export default About;

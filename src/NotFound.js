import React from "react";

function NotFound() {
	return (
		<div className="not-found-container">
			<h1>404 </h1>
			<h3>Oups! La page que vous demandez n'existe pas.</h3>
			<a href="/">Retourner sur la page d'accueil</a>
		</div>
	);
}

export default NotFound;

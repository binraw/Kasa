import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function AppRouter() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/about">À propos</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;

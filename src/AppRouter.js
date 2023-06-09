import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Product from "../src/pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";

function AppRouter() {
	return (
		<Router>
			<nav className="navigation-div">
				<Header />
				<ul className="navigation-bar">
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
				<Route path="/card/:id" element={<Product />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;

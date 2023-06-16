import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import CardDetail from "../src/pages/Product/CardDetail";
import NotFound from "./NotFound";

function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/card/:id" element={<CardDetail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;

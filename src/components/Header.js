import { ReactComponent as Logo } from "../Logo.svg";
import { BrowserRouter as Link } from "react-router-dom";
function Header() {
	return (
		<header>
			<Logo className="logo-title" />
			<nav>
				<ul className="navigation-bar">
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/about">À propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
export default Header;

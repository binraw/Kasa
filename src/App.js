import "./style/style.css";
import AppRouter from "./AppRouter";
import Header from "./components/Header/Header";

function App() {
	return (
		<div>
			<Header />
			<AppRouter />
		</div>
	);
}

export default App;

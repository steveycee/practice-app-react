import "./app.css";
import Header from "./components/header-component";
import Text from "./components/text-component";
import Toggle from "./components/toggle-component";
import Gallery from "./components/gallery_component/gallery-component";
import Form from "./components/form_component/form-component";
import Menu from "./components/menu_component/menu-component";
import APIDriven from "./components/api-driven-component";

import Footer from "./components/footer-component";

function App() {
	return (
		<div className="flexContainer">
			<Header />
			<Text />
			<Toggle />
			<Gallery />
			<Form />
			<Menu />
			<APIDriven />
			<Footer />
		</div>
	);
}

export default App;

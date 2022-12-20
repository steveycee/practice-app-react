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
			<Header
				title="React Testing App"
				strapline={[
					"An app to allow me to both learn React web development and practice/try out other testing libraries.",
					" Here you can find a link to my ",
					<a href="https://steveycee.wordpress.com/" target="_blank">
						blog
					</a>,
					" and my ",
					<a href="https://steveycee.com/" target="_blank">
						website
					</a>,
					".",
				]}
			/>
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

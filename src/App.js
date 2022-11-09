import "./app.css";
import Header from "./components/header_component";
import Text from "./components/text_component";
import Toggle from "./components/toggle_component";
import Gallery from "./components/gallery_component/gallery_component";
import ResponsiveMenu from "./components/responsive_menu_component";
import InputForm from "./components/input_form_component";
import APIDriven from "./components/api_driven_component";

import Footer from "./components/footer_component";

function App() {
  return (
    <>
      <Header />
      <Text />
      <Toggle />
      <Gallery />
      <ResponsiveMenu />
      <InputForm />
      <APIDriven />
      <Footer />
    </>
  );
}

export default App;

import "./styles/styles.css";
import "./util/handleScroll";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TestBody from "./components/TestBody";
import NavMenu from "./components/NavMenu";
import useScreenSize from "./util/handleResize";

function App() {
  const screenSize = useScreenSize();

  return (
    <div>
      {screenSize.width > 650 ? <NavBar /> : <NavMenu />}
      <TestBody />
      <Footer />
    </div>
  );
}

export default App;

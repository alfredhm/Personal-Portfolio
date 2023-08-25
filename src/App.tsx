import "./styles/styles.css";
import "./util/handleScroll";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TestBody from "./components/TestBody";
import NavMenu from "./components/NavMenu";
import useScreenSize from "./util/handleResize";
import handleScroll from "./util/handleScroll";
import { useEffect } from "react";

function App() {
  const screenSize = useScreenSize();

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div onScroll={handleScroll} onTouchMove={handleScroll}>
      {screenSize.width > 850 ? <NavBar /> : <NavMenu />}
      <TestBody
        screenWidth={screenSize.width}
        iconSize={screenSize.width > 850 ? 25 : 18}
      />
      <Footer />
    </div>
  );
}

export default App;

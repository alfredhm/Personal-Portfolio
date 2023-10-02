import "./styles/styles.css";
import "./util/handleScroll";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Body from "./components/Body";
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
    <div
      onScroll={screenSize.width > 850 ? handleScroll : () => {}}
      onTouchMove={screenSize.width > 850 ? handleScroll : () => {}}
    >
      {screenSize.width > 850 ? <NavBar /> : <NavMenu />}
      <Body
        screenWidth={screenSize.width}
        iconSize={screenSize.width > 850 ? 25 : 18}
      />
      <Footer />
    </div>
  );
}

export default App;

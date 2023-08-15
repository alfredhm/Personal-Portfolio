import "./styles/styles.css";
import "./util/handleScroll";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TestBody from "./components/TestBody";

function App() {
  return (
    <div>
      <NavBar />
      <TestBody />
      <Footer />
    </div>
  );
}

export default App;

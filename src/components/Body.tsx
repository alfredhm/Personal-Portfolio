import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Experience from "./experience/Experience";
import ExperienceMobile from "./experience/ExperienceMobile";
import Projects from "./projects/Projects";

interface Props {
  iconSize: number;
  screenWidth: number;
}

const TestBody = ({ iconSize, screenWidth }: Props) => {
  return (
    <main>
      <Home />
      <About />
      {screenWidth > 850 ? (
        <Experience screenWidth={screenWidth} />
      ) : (
        <ExperienceMobile screenWidth={screenWidth} />
      )}
      <Projects iconSize={iconSize} />
      <Contact iconSize={iconSize} screenWidth={screenWidth} />
    </main>
  );
};

export default TestBody;

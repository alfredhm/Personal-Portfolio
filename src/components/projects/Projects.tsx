import WeatherAppImage from "../../assets/app.jpg";
import SlitherAppImage from "../../assets/slither.jpg";
import LeftProject from "./LeftProject";
import RightProject from "./RightProject";

interface Props {
  iconSize: number;
}

const weatherDescription =
  "A simple, elegant weather app with current, hourly, and daily data as well as moving backgrounds based on condition and an image based on location.";
const weatherTech = [
  "React",
  "Tailwind",
  "Google API",
  "OpenWeather API",
  "Vercel",
];

const slitherDescription =
  "A twitter-esque network app that allows users to post hisses, like hisses, change their profile information, edit hisses, and follow other users.";
const slitherTech = ["Python", "Sass", "Django", "jinja2", "Bootstrap"];

const Projects = ({ iconSize }: Props) => {
  return (
    <>
      <section id="projects">
        <div className="title-div">
          <h2>Projects</h2>
          <hr></hr>
        </div>
        <LeftProject
          imageURL={WeatherAppImage}
          title="Weather"
          description={weatherDescription}
          techlist={weatherTech}
          iconSize={iconSize}
        />
        <RightProject
          imageURL={SlitherAppImage}
          title="Slither"
          description={slitherDescription}
          techlist={slitherTech}
          iconSize={iconSize}
        />
        <br></br>
      </section>
    </>
  );
};

export default Projects;

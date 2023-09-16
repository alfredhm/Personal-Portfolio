import WeatherAppImage from "../../assets/app.jpg";
import SlitherAppImage from "../../assets/slither.jpg";
import GameHubAppImage from "../../assets/GameHub.jpg";
import LeftProject from "./LeftProject";
import RightProject from "./RightProject";

interface Props {
  iconSize: number;
}

const weatherDescription =
  "A simple, elegant weather app with current, hourly, and daily data as well as moving backgrounds based on condition and an image based on location.";
const weatherTech = ["React", "Tailwind", "oogle API", "OpenWeather API"];

const slitherDescription =
  "A twitter-esque network app that allows users to post hisses, like hisses, change their profile information, edit hisses, and follow other users.";
const slitherTech = ["Python", "Sass", "Django", "Jinja2", "Bootstrap"];

const gameHubDescription =
  "A web app for helping you find a new game. You can search and filter based on platform, genre, etc. Includes loading skeletons as well as efficient and effective API fetching.";
const gameHubTech = ["React", "TypeScript", "React Router", "RAWG API"];

const Projects = ({ iconSize }: Props) => {
  return (
    <>
      <section id="projects">
        <div className="title-div">
          <h1>Projects</h1>
          <hr></hr>
        </div>
        <LeftProject
          imageURL={WeatherAppImage}
          title="Weather"
          description={weatherDescription}
          techlist={weatherTech}
          iconSize={iconSize}
          href="https://alfredhm-weather.vercel.app/"
          github="https://github.com/alfredhm/Weather"
        />
        <RightProject
          imageURL={SlitherAppImage}
          title="Slither"
          description={slitherDescription}
          techlist={slitherTech}
          iconSize={iconSize}
          href="https://alfredhm.pythonanywhere.com/"
          github="https://github.com/alfredhm/Slither"
        />
        <LeftProject
          imageURL={GameHubAppImage}
          title="Game Hub"
          description={gameHubDescription}
          techlist={gameHubTech}
          iconSize={iconSize}
          href="https://alfredhm-gamehub.vercel.app/"
          github="https://github.com/alfredhm/GamehubTutorial"
        />
        <br></br>
      </section>
    </>
  );
};

export default Projects;

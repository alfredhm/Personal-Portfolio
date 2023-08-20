import WeatherAppImage from "../assets/app.jpg";
import SlitherAppImage from "../assets/slither.jpg";
import { RiGithubLine } from "react-icons/ri";
import { BiLink } from "react-icons/bi";
import { useState } from "react";

interface Props {
  iconSize: number;
}

const Projects = ({ iconSize }: Props) => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <>
      <section id="projects">
        <div className="title-div">
          <h2>Projects</h2>
          <hr></hr>
        </div>
        <div className="project-div-left">
          <div className="project-image-div">
            <a target="_blank" href="https://alfredhm-weather.vercel.app/">
              <div
                style={
                  hover1
                    ? { backgroundColor: "transparent", cursor: "pointer" }
                    : { backgroundColor: "#AAC7D8", opacity: "70%" }
                }
                onMouseOver={() => setHover1(true)}
                onMouseOut={() => setHover1(false)}
                className="image-cover"
              ></div>
            </a>
            <img src={WeatherAppImage} />
          </div>
          <div className="project-text-div">
            <div className="project-text-flex">
              <h3>Weather</h3>
              <div className="gap-10px">
                <div className="description-div">
                  <div className="description-text-div">
                    <p>
                      A simple, elegant weather app with current, hourly, and
                      daily data as well as moving backgrounds based on
                      condition and an image based on location.
                    </p>
                  </div>
                </div>
                <ul className="tech-list">
                  <li className="tech-item">React</li>
                  <li className="tech-item">Tailwind</li>
                  <li className="tech-item">Google API</li>
                  <li className="tech-item">OpenWeather API</li>
                  <li className="tech-item">Vercel</li>
                </ul>
                <div className="project-links">
                  <a target="_blank" href="https://github.com/alfredhm/Weather">
                    <RiGithubLine size={iconSize} />
                  </a>
                  <a
                    target="_blank"
                    href="https://alfredhm-weather.vercel.app/"
                  >
                    <BiLink size={iconSize} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-div-right">
          <div className="project-text-div-flipped">
            <div className="project-text-flex">
              <h3 className="flipped-h3">Slither</h3>
              <div className="gap-10px">
                <div className="description-div">
                  <div className="description-text-div-flipped">
                    <p>
                      A twitter-esque network app that allows users to post
                      hisses, like hisses, change their profile information,
                      edit hisses, and follow other users.
                    </p>
                  </div>
                </div>
                <ul className="tech-list flex-start">
                  <li className="tech-item">Python</li>
                  <li className="tech-item">Sass</li>
                  <li className="tech-item">Django</li>
                  <li className="tech-item">Jinja2</li>
                  <li className="tech-item">Bootstrap</li>
                </ul>
                <div className="project-links flex-start">
                  <a target="_blank" href="https://github.com/alfredhm/Slither">
                    <RiGithubLine size={iconSize} />
                  </a>
                  <a
                    target="_blank"
                    href="https://alfredhm.pythonanywhere.com/"
                  >
                    <BiLink size={iconSize} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-image-div-flipped">
            <a target="_blank" href="https://alfredhm.pythonanywhere.com/">
              <div
                style={
                  hover2
                    ? { backgroundColor: "transparent", cursor: "pointer" }
                    : { backgroundColor: "#AAC7D8", opacity: "70%" }
                }
                onMouseOver={() => setHover2(true)}
                onMouseOut={() => setHover2(false)}
                className="image-cover"
              ></div>
            </a>
            <img src={SlitherAppImage} />
          </div>
        </div>
        <br></br>
        <br></br>
      </section>
    </>
  );
};

export default Projects;

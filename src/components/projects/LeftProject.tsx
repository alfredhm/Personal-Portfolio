import { useState } from "react";
import { BiLink } from "react-icons/bi";
import { RiGithubLine } from "react-icons/ri";

interface Props {
  imageURL: string;
  title: string;
  description: string;
  techlist: string[];
  iconSize: number;
  href: string;
  github: string;
}

const LeftProject = ({
  imageURL,
  title,
  description,
  techlist,
  iconSize,
  href,
  github,
}: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="project-div-left">
      <div className="project-image-div">
        <a target="_blank" href={href}>
          <div
            style={
              hover
                ? { backgroundColor: "transparent", cursor: "pointer" }
                : { backgroundColor: "black", opacity: "40%" }
            }
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            className="image-cover"
          ></div>
        </a>
        <img src={imageURL} />
      </div>
      <div className="project-text-div">
        <div className="project-text-flex">
          <h3>{title}</h3>
          <div className="gap-10px">
            <div className="description-div">
              <div className="description-text-div">
                <p>{description}</p>
              </div>
            </div>
            <ul className="tech-list">
              {techlist.map((tech, index) => (
                <li key={index} className="tech-item">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="project-links">
              <a target="_blank" href={github}>
                <RiGithubLine size={iconSize} />
              </a>
              <a target="_blank" href={href}>
                <BiLink size={iconSize} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftProject;

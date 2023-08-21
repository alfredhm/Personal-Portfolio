import React, { useState } from "react";
import { BiLink } from "react-icons/bi";
import { RiGithubLine } from "react-icons/ri";

interface Props {
  imageURL: string;
  title: string;
  description: string;
  techlist: string[];
  iconSize: number;
}

const RightProject = ({
  imageURL,
  title,
  description,
  techlist,
  iconSize,
}: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="project-div-right">
      <div className="project-text-div-flipped">
        <div className="project-text-flex">
          <h3 className="flipped-h3">{title}</h3>
          <div className="gap-10px">
            <div className="description-div">
              <div className="description-text-div-flipped">
                <p>{description}</p>
              </div>
            </div>
            <ul className="tech-list flex-start">
              {techlist.map((tech, index) => (
                <li key={index} className="tech-item">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="project-links flex-start">
              <a target="_blank" href="https://github.com/alfredhm/Slither">
                <RiGithubLine size={iconSize} />
              </a>
              <a target="_blank" href="https://alfredhm.pythonanywhere.com/">
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
    </div>
  );
};

export default RightProject;

import { RiGithubLine } from "react-icons/ri";
import { AiOutlineYoutube, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="copyright">
          <button
            className="box-border w-4 h-4 attributions"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            ©
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <a
              href="https://www.flaticon.com/free-icons/profile"
              title="profile icons"
            >
              Profile icons created by Freepik - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/free-icons/work"
              title="work icons"
            >
              Work icons created by Freepik - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/free-icons/project"
              title="project icons"
            >
              Project icons created by Freepik - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/free-icons/contact"
              title="contact icons"
            >
              Contact icons created by th studio - Flaticon
            </a>
          </div>
        </div>
      </div>
      <div className="built-div">
        <p>Built by Alfred Morgan</p>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/alfredhm">
              <RiGithubLine size={20} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCHxo0vzb1CyJt1u7tIbkYbQ"
            >
              <AiOutlineYoutube size={20} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alfred-morgan-541372247/"
            >
              <AiOutlineLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

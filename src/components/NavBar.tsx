import LogoIcon from "../assets/logo.png";
import AboutIcon from "../assets/about.png";
import ExperienceIcon from "../assets/work.png";
import ProjectsIcon from "../assets/projects.png";
import ContactIcon from "../assets/contact.png";

const NavBar = () => {
  return (
    <header>
      <nav className="header-flex">
        <a href="#" className="link">
          <img className="logo" src={LogoIcon}></img>
        </a>
        <ol className="links">
          <li>
            <a href="#about" className="link">
              <div className="link-details">
                <img className="icon" src={AboutIcon} />
                <span id="link-title">About</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#experience" className="link">
              <div className="link-details">
                <img className="icon" src={ExperienceIcon} />
                <span id="link-title">Experience</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#projects" className="link">
              <div className="link-details">
                <img className="icon" src={ProjectsIcon} />
                <span id="link-title">Projects</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#contact" className="link">
              <div className="link-details">
                <img className="icon" src={ContactIcon} />
                <span id="link-title">Contact</span>
              </div>
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default NavBar;

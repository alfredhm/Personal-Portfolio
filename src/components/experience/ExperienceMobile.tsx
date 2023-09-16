import GN from "../../assets/GN.png";

interface Props {
  screenWidth: number;
}

const ExperienceMobile = ({ screenWidth }: Props) => {
  return (
    <section id="experience">
      <div className="title-div">
        <h1>Experience</h1>
        <hr></hr>
      </div>
      <nav>
        <ul className="tech-list-mobile">
          <li className="ghost"></li>
          <li className="ghost"></li>
          <li>
            <a
              href="https://player.geaux.tv/player"
              target="_blank"
              className="job"
            >
              <img src={GN}></img>
              {screenWidth > 500 ? <p>Geaux</p> : <p></p>}
            </a>
          </li>
          <li className="ghost"></li>
          <li className="ghost"></li>
        </ul>
      </nav>
      <div className="experience-description-div" style={{ width: "100%" }}>
        <h3>Fullstack Web Developer Intern</h3>
        <p className="shy-text">November - May 2023</p>
        <ul className="job-points-list">
          <li>
            <p>
              Created and expanded on a user-friendly menu for ease-of-access,
              allowing users to easily travel across the site.
            </p>
          </li>
          <li>
            <p>
              Built a profile settings page allowing users to alter their data
              such as their name, email, and phone number with firebase
              verification where needed.
            </p>
          </li>
          <li>
            <p>
              Collaborated with other developers using Firebase and ReactJS with
              the end goal of providing users the option to sign in with their
              phone numbers.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceMobile;

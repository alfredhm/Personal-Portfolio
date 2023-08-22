import GN from "../../assets/GN.png";

interface Props {
  screenWidth: number;
}

const Experience = ({ screenWidth }: Props) => {
  return (
    <section id="experience">
      <div className="title-div">
        <h2>Experience</h2>
        <hr></hr>
      </div>
      <div className="experience-div">
        <div className="experience-list-div">
          <ul className="tech-list">
            <li>
              <a
                href="https://player.geaux.tv/player"
                target="_blank"
                className="job flex"
              >
                <img src={GN}></img>
                {screenWidth > 1500 ? (
                  <p>Geaux Network</p>
                ) : screenWidth > 1050 ? (
                  <p>Geaux</p>
                ) : (
                  <p></p>
                )}
              </a>
            </li>
            <li className="ghost"></li>
            <li className="ghost"></li>
            <li className="ghost"></li>
            <li className="ghost"></li>
          </ul>
        </div>
        <div className="experience-description-div">
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
                Collaborated with other developers using Firebase and ReactJS
                with the end goal of providing users the option to sign in with
                their phone numbers.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

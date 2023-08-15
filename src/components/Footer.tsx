const Footer = () => {
  return (
    <footer>
      <div>
        <p>
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
    </footer>
  );
};

export default Footer;

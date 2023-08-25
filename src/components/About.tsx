import { useEffect, useState } from "react";
import Me from "../assets/me.png";

const About = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const setCover = async () => {
      const imageDiv = document
        .querySelector(".about-img")
        ?.getBoundingClientRect();
      const height = imageDiv?.height;
      const width = imageDiv?.width;
      console.log(imageDiv);

      if (imageDiv) {
        await setWidth(width);
        await setHeight(height);
      }
    };
    setTimeout(setCover, 1);
  });

  return (
    <section id="about">
      <div className="title-div">
        <h2>About Me</h2>
        <hr></hr>
      </div>
      <br></br>
      <div className="about-flex">
        <div className="about-text">
          <p>
            Hello, my name is Alfred Morgan and I'm a 19-year-old enthusiastic
            full stack developer. I've been on an exhilarating coding journey
            since the pandemic hit. My path to programming was sparked by an
            encounter with the Harvard CS50 course, and I haven't looked back
            since.
          </p>
          <p>
            When I'm not studying or coding, you'll find me exploring a variety
            of passions. One of my top priorities is hitting the gym, where I
            find the perfect balance between physical and mental well-being. I
            also enjoy playing video games and have been playing them for over a
            decade. I have 5 animals, 3 dogs and 2 cats who keep me company when
            I'm working.
          </p>
          <p>
            I am always eager to take on new challenges that push my boundaries
            and expand my skill set. As I stand on the threshold of my career, I
            am hungry for growth and new opportunities. The prospect of
            contributing my skills to meaningful projects while continuously
            learning and improving is what drives me forward. Your interest in
            my portfolio is deeply appreciated.{" "}
          </p>
          <p>
            Thank you for considering my work – I can't wait to see where this
            journey takes me next!
          </p>
        </div>
        <a
          className="about-img"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/alfred-morgan-541372247/"
        >
          <div
            style={{ width: width, height: height }}
            className="me-cover"
          ></div>
          <img className="me" src={Me}></img>
        </a>
      </div>
    </section>
  );
};

export default About;

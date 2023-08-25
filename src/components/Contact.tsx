import AboutIcon from "../assets/about.png";
import ContactIcon from "../assets/contact.png";
import { AiOutlineFileText } from "react-icons/ai";

import emailjs from "@emailjs/browser";

import { useEffect, useRef, useState } from "react";

const service_id = "service_75yy2yc";
const template_id = "template_amz5h4s";
const public_key = "Yh8oP2xNiYM_hgugM";

interface Props {
  iconSize: number;
  screenWidth: number;
}

const Contact = ({ iconSize, screenWidth }: Props) => {
  const form = useRef<HTMLFormElement>(null!);
  const [cover, setCover] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    form.current.focus(); //Object is possibly 'null'
  }, [cover]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      async (result) => {
        console.log(result.text);
        await setMessage("E-Mail Successfully Sent!");
      },
      async (error) => {
        console.log(error.text);
        await setMessage("Error Sending E-Mail");
      }
    );
    e.target.reset();
    setCover(true);
  };

  const handleClose = () => {
    const cover = document.querySelector<HTMLDivElement>(".contact-cover");
    if (cover) cover.style.display = "none";
    setCover(false);
  };

  return (
    <section id="contact">
      <div className="title-div">
        <h2>Contact</h2>
        <hr></hr>
      </div>
      <hr></hr>
      <div className="container">
        {cover && (
          <div className="contact-cover">
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                {message}
              </p>
            </div>
            <button onClick={() => handleClose()} className="close-button">
              Okay
            </button>
          </div>
        )}
        <form ref={form} onSubmit={handleSubmit}>
          <div className="contact-flex">
            {screenWidth > 700 && <img className="icon" src={AboutIcon} />}
            <input type="text" name="user_name" placeholder="Name"></input>
          </div>
          <div className="contact-flex">
            {screenWidth > 700 && <img className="icon" src={ContactIcon} />}
            <input type="email" name="user_email" placeholder="E-Mail"></input>
          </div>
          <div className="contact-flex">
            {screenWidth > 700 && (
              <AiOutlineFileText
                size={iconSize}
                style={{ color: "#aac7d8", marginRight: "8px" }}
                className="icon"
              />
            )}
            <textarea
              name="message"
              className="input-body"
              placeholder="Body"
            ></textarea>
          </div>
          <div className="submit-div">
            <input type="submit" className="send-email" value="Send"></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

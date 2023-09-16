import AboutIcon from "../assets/about.png";
import ContactIcon from "../assets/contact.png";
import {
  AiOutlineFileText,
  AiOutlineArrowRight,
  AiOutlineCheck,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Oval } from "react-loader-spinner";

import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";

const service_id = "service_75yy2yc";
const template_id = "template_amz5h4s";
const public_key = "Yh8oP2xNiYM_hgugM";

interface Props {
  iconSize: number;
  screenWidth: number;
}

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "too short" })
    .max(30, { message: "too long" }),
  email: z
    .string()
    .email({ message: "bad email" })
    .max(50, { message: "too long" }),
  body: z.string().min(10, { message: "too short" }),
});

type FormData = z.infer<typeof schema>;

const Contact = ({ iconSize, screenWidth }: Props) => {
  const form = useRef<HTMLFormElement>(null!);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSend = (e: any) => {
    console.log(e);
    setLoading(true);
    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        console.log(result.text);
        setLoading(false);
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
        setError(true);
        setTimeout(() => setError(false), 3000);
      }
    );
  };

  const handleResize = (e: any) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    e.target.style.paddingBottom = "0.7rem";
    const height = parseInt(
      e.target.style.height.slice(0, e.target.style.height.length - 2)
    );
    document.querySelector("body")?.addEventListener("click", () => {
      if (height < 71) {
        e.target.style.height = "3rem";
      } else {
        e.target.style.height = `${height}px`;
      }
    });
  };

  return (
    <section id="contact">
      <div className="title-div">
        <h2>Contact</h2>
        <hr></hr>
      </div>
      <hr></hr>
      <div className="container">
        <form
          ref={form}
          onSubmit={handleSubmit(() => {
            handleSend(form);
            reset();
          })}
        >
          <div className="contact-flex">
            {screenWidth > 400 && <img className="icon" src={AboutIcon} />}
            <input
              {...register("name")}
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              style={
                errors.name && {
                  borderColor: "indianred",
                  borderBottomWidth: "1px",
                }
              }
            />
          </div>
          <div className="contact-flex">
            {screenWidth > 400 && <img className="icon" src={ContactIcon} />}
            <input
              {...register("email")}
              id="email"
              type="email"
              name="email"
              placeholder="E-Mail"
              style={
                errors.email && {
                  borderColor: "indianred",
                  borderBottomWidth: "1px",
                }
              }
            />
          </div>
          <div className="contact-flex">
            {screenWidth > 400 && (
              <AiOutlineFileText
                size={iconSize}
                style={{ color: "#aac7d8", marginRight: "8px" }}
                className="icon"
              />
            )}
            <textarea
              {...register("body")}
              id="body"
              name="body"
              className="input-body"
              placeholder="Body"
              onInput={handleResize}
              style={
                errors.body && {
                  borderColor: "indianred",
                  borderBottomWidth: "1px",
                }
              }
            />
          </div>
          <div className="flex-center">
            <button type="submit" className="submit-div">
              <p className="send-email">Send</p>
              <AiOutlineArrowRight
                size={iconSize - 5}
                style={{
                  color: "#aac7d8",
                  marginLeft: "4px",
                  marginBottom: "2px",
                }}
              />
            </button>
            <div className="loader-container">
              {isLoading ? (
                <Oval
                  height={30}
                  width={30}
                  color="#AAC7D8"
                  secondaryColor="#AAC7D8"
                />
              ) : sent ? (
                <AiOutlineCheck size={iconSize} style={{ color: "#aac7d8" }} />
              ) : error ? (
                <RxCross1 size={iconSize} style={{ color: "#aac7d8" }} />
              ) : (
                <></>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

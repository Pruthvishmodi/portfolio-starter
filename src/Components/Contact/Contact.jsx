import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s58w8nw",
        "template_t0sk70d",
        form.current,
        "JeJXtVUBrmNWdlyO9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },

        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur o-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <input
            type="number"
            name="user_contact_number"
            className="user"
            placeholder="Contact number"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <button type="submit" className="button" placeholder="Email">
            Send
          </button>
          <span>{done && "Thanks for contact me!"} </span>
          <div
            className="blur o-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

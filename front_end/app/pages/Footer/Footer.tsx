"use client";

import { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { client } from "../../client";
import Image from "next/image";
import "./Footer.scss";
import Link from "next/link";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData); // Add this line to check formData before making the API call
    setLoading(true);

    const contact = {
      _type: "contact",
      name: username,
      email,
      message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <h2 className="head-text">Take a Chai & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <Image src={images.email} alt="email"/>
          <Link href="mailto:shahfahidbaloch@gmail.com" className="p-text" target="_blank">
            shahfahidbaloch@gmail.com
          </Link>
        </div>
        <div className="app__footer-card">
          <Image src={images.mobile} alt="phone" />
          <Link href="tel:+923368558700" target="_blank">+923368558700</Link>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);

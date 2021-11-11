import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { Link } from "react-router-dom";
import logo from "../../images/mwi-logo.png";

function Contact() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let FormData = { first_name, last_name, title, email, message };
    await axios.post("http://localhost:5000/contactform", FormData);
    setFirstName("");
    setLastName("");
    setTitle("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <section className="contact-left-side">
        <img className="contact-logo" src={logo} alt="Midwestern Logo" />
        <div className="contact-left-side-content">
          <h1 className="contact-left-side-header">
            <span className="contact-gold-underline">Heading</span> One
          </h1>
          <p className="contact-left-side-para">
            {`            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua. 
                
                Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.`}
          </p>
        </div>
      </section>

      <section className="contact-right-side">
        <Link className="contact-page-link contact-link" to="/">
          home
        </Link>
        <div className="contact-right-side-content">
          <h1 className="contact-right-side-header">Heading Two</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              className="contact-input"
              placeholder="First Name"
            ></input>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              className="contact-input"
              placeholder="Last Name"
            ></input>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="contact-input"
              placeholder="Title"
            ></input>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-email contact-input"
              required
              placeholder="Email"
            ></input>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-textarea"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="contact-submit learn-more">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewletter] = useState("");

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleNewsletterChange = (e) => setNewletter(e.target.value);

  return (
    <div className="container__form">
    <form>
      <h2 className="h2__contact">FORM</h2>
      <div className="container">
        <div className="colonnef">
          <label htmlFor="firstName">
            First Name
            <input
              type="texte"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
        </div>
        <div className="colonner">
          <label htmlFor="lastName">
            Last Name
            <input
              type="texte"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
        </div>

        <label htmlFor="message">
          Message
          <textarea
            type="message"
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
        </label>
        <div className="checkbox">
          <label htmlFor="newsletter">
            <input
              type="checkbox"
              id="newsletter"
              value={newsletter}
              onChange={handleNewsletterChange}
            />
            <div className="subscribe">
            Subscribe
            </div>
          </label>
        </div>
      </div>
      <div className="btn__form">
      <button className="btn__music" onClick={() => alert('Merci pour votre message')} type="button">Submit</button>
      </div>
    </form>
    </div>
  );
};
export default Contact;

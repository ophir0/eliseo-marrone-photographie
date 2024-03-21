import React from 'react'
import { useState, } from "react";
import { sendCustomEmail } from "./email";

export const ContactForm = () => {
  
  const [details, setDetails] = useState({
    from_name: "",
    email_address: "",
    message: "",
  });

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };


  const handleSendEmail = () => {
    sendCustomEmail(details);
    
  };

  return (
    <div className="contactform">
    <div className="main">
    <div>
        <span>Votre prenom:</span>
        <input
          name="from_name"
          value={details.from_name}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Besoin"
        />
      </div>
      <div>
        <span>Votre email:</span>
        <input
          name="email_address"
          value={details.email_address}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Besoin"
        />
      </div>
      <div>
        <span>Votre message:</span>
        <textarea
          name="message"
          value={details.message}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Besoin"
        />
      </div>
      <button
        id='submitButton'
        disabled={ !details.from_name || !details.message || !details.email_address }
        onClick={handleSendEmail}
      >

        <span>Send Email</span>
        
      </button>
    </div>
    </div>
  );
};
export default ContactForm
import React from 'react';
import './Contact.css';
import ReactContactForm from 'react-mail-form';

function Contact() {
  return (
    <div id="contact-page">
      <p id="text">Contact Us</p>
      <p id="contact-description">Questions? Get in touch with us here!</p>
      <ReactContactForm titlePlaceholder="Subject" contentsPlaceholder="Body" buttonText="Submit" className="contact-form" to="danielschoi@ucla.edu" />
    </div>
  );
}

export default Contact;

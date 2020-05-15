import React from 'react';
import './Contact.css';
//import ReactContactForm from 'react-mail-form';

function Contact() {
  return (
    <div id="contact-page">
      <p id="text">Contact Us</p>
      <p id="contact-description">Questions? Get in touch with us here!</p>
      {/* <ReactContactForm titlePlaceholder="Subject" contentsPlaceholder="Body" buttonText="Submit" className="contact-form" to="president@rssla.org" /> */}
      <div class="contact-form">
        <input class="contact-field" type="email" maxlength="50" placeholder="Subject"/>
        <textarea class="contact-field body" rows="8" maxlength="500" placeholder="Body"/>
        <a href="mailto:president@rssla.org?subject=&amp;body=" target="_blank" rel="noopener noreferrer">Submit</a>
      </div>
    </div>
  );
}

export default Contact;

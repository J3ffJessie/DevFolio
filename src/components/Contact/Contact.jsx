import React from 'react';
import emailjs from 'emailjs-com';



// import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    // e.preventDefault();

    emailjs.sendForm('profile_contact', 'contact_form', e.target, 'user_lZ35CmCgyGgFIqGgPeWoZ')
      .then((result) => {
      }, (error) => {
      });
      alert("Thank you for contacting me. I will reply as soon as possible.")
  }

  return (
    <details id="contact">
      <summary>Contact Me</summary>
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" required="true" />
      <label>Email</label>
      <input type="email" name="user_email" required="true" />
      <label>Message</label>
      <textarea name="message" required="true" />
      <input type="submit" value="Send" />
    </form>
    </details>
  );
}


import React, { useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false); // State variable for tracking success

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4wvnhlt', 'template_11za4xr', form.current, '3_swA1GktPNzMKvjU')
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
          setTimeout(() => {
            setIsEmailSent(false);
          }, 5000); // Hide the flash message after 5 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>anudelay99@gmail.com</h5>
            <a href="mailto:anudelay99@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Anuradha Basnayake</h5>
            <a href="https://m.me/anuradha.basnayake.5895" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+94 774678176</h5>
            <a href="https://api.whatsapp.com/send?phone=+94774678176" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {isEmailSent && <div className="flash-message success">Your message sent successfully!</div>}

        </form>

      </div>
    </section>
  );
};

export default Contact;

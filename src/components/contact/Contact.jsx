import React, { useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsInstagram} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false); // State variable for tracking success

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gq7ref9', 'template_11ko8r9', form.current, '9J__uGQCFsaix0uFp')
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
    <section id="contact" className='container contact'>
      <div className='contact__header'>
        <hr />
        <h1>Contact Us</h1>
        <hr />
      </div>

      <div className="contact__container">
        <div className="contact__options">
          <a href="mailto:pawpal.care@gmail.com" target="_blank" rel="noopener noreferrer">
            <article className="contact__option">
              <div className='__contactMethod'>
                <MdOutlineEmail className="contact__option-icon" />
                <h4>Email</h4>
              </div>
              {/* <h5>anudelay99@gmail.com</h5>
              <a href="mailto:anudelay99@gmail.com" target="_blank" rel="noopener noreferrer">
                Send a message
              </a> */}
            </article>
          </a>
          <a href="">
            <article className="contact__option">
              <div className="__contactMethod">
                <RiMessengerLine className="contact__option-icon" />
                <h4>Messenger</h4>
              </div>
              
            </article>
          </a>

          <a href="">
            <article className="contact__option">
              <div className="__contactMethod">
                <BsInstagram className="contact__option-icon" />
                <h4>Instagram</h4>
              </div>
              
            </article>
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail} className='form__details'>
          <p>Send your message</p>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn__contact">
            Send Message
          </button>
          {isEmailSent && <div className="flash-message success" style={{ color: 'var(--color-dark-rosy)', fontFamily: 'Poppins', fontWeight: 'bold' }}>Your message sent successfully!</div>}

        </form>

      </div>
    </section>
  );
};

export default Contact;

import React from 'react'
import './Contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4lw0qmq', 'template_j2xq6eg', form.current, 'SvC8VTTG3EnPMg2l8')
    e.target.reset()
  };
  return (

    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>dk2244668800@gmail.com</h5>
            <a href="mailto:dk2244668800@gmailc.com" target="_blank">
              send a message
            </a>
          </article>

          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon' />
            <h4>Linked In</h4>
            {/* <h5>Find Me</h5> */}
            <a href="https://www.linkedin.com/in/dheeraj-kumar-972aaa215/" target="_blank">
              Find Me
            </a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+917668114043</h5>
            <a href="https://wa.me/+917668114043" target="_blank">
              send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Mail' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>

  )
}

export default Contacts
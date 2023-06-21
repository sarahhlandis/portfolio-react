import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import EmailIcon from '../assets/EmailIcon';
import MobileIcon from '../assets/MobileIcon';

export function Connect() {
  
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_KEY_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          // alert('Email successfully sent!');
          setEmailSent(true);
          form.current.reset();
        }
      )
      .catch((error) => {
        console.log(error.text);
        alert('Failed to send email. Please try again!');
      });
  };

  return (
    <div className='flex'>
      <div 
      data-aos="fade-right" data-aos-easing="ease-in-out"
      className='w-1/2 font-poppins font-extralight text-xl justify-center pt-20'>
        <section className="text-center">
          <p className='font-bold italic text-4xl tracking-wide'>Let&#39;s talk! </p>
          <p>
            <br/>Send me a message via the form, 
            <br />flick me an email,
            <br />give me a ring,
            <br />or <br />
            connect with me on your preferred channel.
          </p>
        </section>
        <section className="text-center pt-10">
          <p><br />You&#39;re welcome to reach me at:</p>
          <p className='flex justify-center pt-5'>
            <a 
              href="https://www.linkedin.com/in/sarahhlandis/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-6xl hover:scale-125 ease-out duration-200">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#BAE6FD" }} />
            </a>
            <a 
              href="https://github.com/sarahhlandis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-6xl pl-7 hover:scale-125 ease-out duration-200">
              <FontAwesomeIcon icon={faGithubSquare} style={{ color: "#BAE6FD" }} />
            </a>
            <a 
              href={`mailto:${import.meta.env.VITE_APP_EMAIL}`}
              // target="_blank" 
              rel="noopener noreferrer"
              className="pl-7 mt-1 hover:scale-125 ease-out duration-200">
              <EmailIcon />
            </a>
            <MobileIcon />
          
          </p>
        </section>
      </div>
      {!emailSent ? (
        <div 
        data-aos="fade-left" data-aos-easing="ease-in-out"
        className="w-1/2 mx-auto font-poppins pt-16 pl-10">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-orange-100 border-8 solid border-orange-300 shadow-md rounded px-8 pt-8 pb-10 mb-4 w-10/12"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="user_name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="user_email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <input
                className="bg-sky-300 hover:bg-sky-400 hover:scale-105 ease-out duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-96 h-16"
                type="submit"
                value="Send"
              />
            </div>
          </form> 
      </div> )
       : (
        <div className="flex justify-center h-100 w-1/2 pt-10">
          <section className="flex text-xl font-poppins font-extralight pt-10 text-center items-center">
            <p>
              Thank you -
              Your email was successfully sent. 
              <br/>
              I&#39;ll be in touch shortly!<br/>
            <p className='flex text-center justify-center pt-5 font-semibold text-2xl italic tracking-wide'>Speak soon...</p>
            </p>
          </section>
        </div>
      )}
    </div>
  );
}

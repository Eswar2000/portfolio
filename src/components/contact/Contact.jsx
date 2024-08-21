import { useState } from 'react';
import './contact.scss';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div id='contact' className='contact'>
      <div className="left-contact">
        <img className='contact-img' src="assets/contact-me.png " alt="Contact Me"/>
      </div>
      <div className="right-contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type='email' label='Email Address' placeholder=' Email address' />
          <input type='name' label='Name' placeholder=' Name' />
          <textarea placeholder=' Write a message'/>
          <button>Notify Me</button>
          {message && <span>He is notified, you can exit now</span>}
        </form>
      </div>
    </div>
  )
}

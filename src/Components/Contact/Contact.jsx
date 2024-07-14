import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linked_icon from '../../assets/ln icon.png'
import github_icon from '../../assets/github_icon.png'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "528138a4-7bcc-461e-a9ca-2d190a341c7a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><a href="mailto:santhipsengottuvel@gmail.com"> santhipsengottuvel@gmail.com</a>

                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><a href="tel:+91 86676 83877">+91 86676 83877</a>
                    
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><a href="https://maps.app.goo.gl/MopuCqMFLkTAx7Mq6">Tiruchengode, TamilNadu</a>
                </div>
                <div className="contact-detail">
                    <img src={linked_icon} alt="" /><a href="https://www.linkedin.com/in/santhip-sengottuvel-4a9619185/"> Santhip Sengottuvel</a>
                </div>
                <div className="contact-detail">
                    <img src={github_icon} alt="" /><a href="https://github.com/santhipsengottuvel"> Santhip Sengottuvel</a>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>

        </form>
      </div>
    </div>
  )
}

export default Contact

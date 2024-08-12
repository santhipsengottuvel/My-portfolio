import React from 'react'
import './Footer.css'
import Footer_logo from '../../assets/footer_logo.svg'
import User_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1><span>SA SA</span></h1>
                <p>Machine Learning Engineer talented in Python, Machine Learning and Data Visualization </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={User_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Santhip Sengottuvel. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
        
    

    
      </div>
    </div>
  )
}

export default Footer

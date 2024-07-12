import React from 'react'
import './Hero.css'
import profile_img from '../../assets/3.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I am Santhip Sengottuvel,</span> Fresher Data Analyst</h1>
            <p>
                Highly analytical and detail-oriented fresher data analyst with a strong foundation
                in Python programming, advanced Excel, MySQL, Power BI, Tableau, data cleaning,
                statistical analysis, and data mining. | am skilled in developing and implementing
                data collection systems, identifying business needs, and creating predictive models to
                improve forecasting accuracy.
            </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me </AnchorLink></div>
                <div className="hero-resume"><a href="https://drive.google.com/file/d/1ZOcJmRFzHV7J-gI-j9RgvoQdSDQ0xqmC/view?usp=sharing">My resume</a></div>



            </div>

        </div>
    )
}

export default Hero

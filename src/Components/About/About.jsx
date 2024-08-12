import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/4.jpg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I am a fresher Machine Learning Engineer with an strong foundation in python programming language, Machine Learning and Building Statistical Models</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Python</p><hr style={{width:"75%"}} /></div>
                        <div className="about-skill"><p>Microsoft Excel</p><hr style={{width:"90%"}} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>Power BI</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>EDA</p><hr style={{width:"75%"}} /></div>
                        <div className="about-skill"><p>ML</p><hr style={{width:"40%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Fresher</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>COURSES COMPLETED</p>
                </div>
            </div>
        </div>
    )
}

export default About

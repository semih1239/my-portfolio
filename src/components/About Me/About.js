import React from 'react'
import "./about.css"

export const AboutMe = () => {
    const sendMail = () => {
        window.open('mailto:semihayyildiz23@hotmail.com')
    }

    return <div className='about-part' id='about'>
        <video autoPlay loop muted id="video">
            <source className="embed-responsive" src={require('../../images/2.mp4')} type="video/mp4" />
        </video>
        <div className="box">
            <span />
            <div className="about">
                <h1>About Me</h1>
                <img src={require('../../images/profile.png')} alt='profile' />
                <p>I am passionate about software and web applications. I am a solution-oriented and researcher for solving problems. I am always open to innovation and learning.
                    I am a person with high energy and I am a complete team player when it comes to communication and coordination with the team.
                    I am always open to learning new libraries and programs for my skills.
                </p>
                <div className="contacts">
                    <a href="https://www.linkedin.com/in/semihayyildiz23/" target='_blank'><i className="fab fa-linkedin-in" /></a>
                    <a href="https://github.com/semih1239" _blank><i className="fab fa-github" /></a>
                    <a onClick={sendMail}><i className="far fa-envelope" /></a>
                </div>
                <button>See CV</button>
            </div>
        </div>
    </div>
}
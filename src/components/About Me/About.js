import React from 'react'
import "./about.css"
import profile from '../../images/profile.png'
import vd from '../../images/1.mp4'

export const AboutMe = () => {
    const sendMail = () => {
        window.open('mailto:semihayyildiz23@hotmail.com')
    }


    return <div className='about-part'>
        <video autoPlay muted id="video">
            <source class="embed-responsive" src={vd} type="video/mp4" />
        </video>
        <div className="box">
            <span />
            <div className="about">
                <h1>About Me</h1>
                <img src={profile} alt='profile-photo' />
                <p>I am passionate about software and web applications. I am a solution-oriented and researcher for solving problems. I am always open to innovation and learning.
                    I am a person with high energy and I am a complete team player when it comes to communication and coordination with the team.
                    I am always open to learning new libraries and programs for my skills.
                </p>
                <div className="contacts">
                    <a href="https://www.linkedin.com/in/semihayyildiz23/" _blank><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/semih1239" _blank><i class="fab fa-github"></i></a>
                    <a onClick={sendMail}><i class="far fa-envelope"></i></a>
                </div>
                <button>See CV</button>
            </div>
        </div>
    </div>
}
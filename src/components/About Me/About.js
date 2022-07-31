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
                <p>
                    I am passionate about software and coding.
                    I am a solution-oriented and researcher for solving problems and open to innovation and learning.
                    I am a person with high energy and team player with high communication and coordination skills
                    I am always open to improve myself with learning new libraries and programs for my skills.
                </p>
                <div className="contacts">
                    <a href="https://www.linkedin.com/in/semihayyildiz23/" target='_blank'><i className="fab fa-linkedin-in" /></a>
                    <a href="https://github.com/semih1239" target='_blank'><i className="fab fa-github" /></a>
                    <a onClick={sendMail}><i className="far fa-envelope" /></a>
                </div>
<<<<<<< HEAD
                <a className='cv' href='https://drive.google.com/file/d/19qyjtXPpG6KCHYMnOH6B76xwlwS0t_QJ/view?usp=sharing' target='_blank'>See CV</a>
=======
                <a className='cv' href='https://drive.google.com/file/d/15ewcXUbeML0_Qf_Gze6uvgJR_-QG8pxx/view?usp=sharing' target='_blank'>See CV</a>
>>>>>>> 74ba30cb581605a16dc99c7527b4ab878074d65a
            </div>
        </div>
    </div>
}
import React from 'react'
import "./nav.css"

export const Navigation = () => {
    return <nav>
        <h3>SEMIH AYYILDIZ</h3>
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
            <label htmlFor="nav-check">
                <span />
                <span />
                <span />
            </label>
        </div>
        <ul className='nav-links'>
            <li>
                <a href='#about'>About Me</a>
            </li>
            <li>
                <a href='#education'>Educations</a>
            </li>
            <li>
                <a href='#skills'>My Skills</a>
            </li>
            <li>
                <a href='#projects'>Projects</a>
            </li>
            <li>
                <a href='#certificates'>Certificates</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </nav>
}
import React from 'react'
import { Navigation } from '../../components/Navigation/Navigation'
import { AboutMe } from '../../components/About Me/About'
import { Education } from '../../components/Education/Education'
import { Skills } from '../../components/Skills/skills'
import { Projects } from '../../components/Projects/Projects'
import { Certificates } from '../../components/Certificates/Certificates'
import './homepage.css'

export const Homepage = () => {

    return <div>
        <div className='navigation'>
            <Navigation />
        </div>
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
    </div>
}
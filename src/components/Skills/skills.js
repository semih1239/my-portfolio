import React from "react";
import './skills.css'

export const Skills = () => {

    return <div id="skills">
        <div className="title">
            <hr />
            <h1>Skills</h1>
            <hr />
        </div>
        <div className="my-skills">
            <div className="skill">
                <img src={require('../../images/html.png')} />
                <p>HTML</p>
            </div>
            <div className="skill">
                <img src={require('../../images/css.png')} />
                <p>CSS</p>
            </div>
            <div className="skill">
                <img src={require('../../images/bootstrap.png')} />
                <p>Bootstrap</p>
            </div>
            <div className="skill">
                <img src={require('../../images/js.png')} />
                <p>Javascript</p>
            </div>
            <div className="skill">
                <img src={require('../../images/storybook.png')} />
                <p>Storybook</p>
            </div>
            <div className="skill">
                <img src={require('../../images/react.png')} />
                <p>React</p>
            </div>
            <div className="skill">
                <img src={require('../../images/mysql.png')} />
                <p>MySQL</p>
            </div>
            <div className="skill">
                <img src={require('../../images/nodejs.png')} />
                <p>NodeJS</p>
            </div>
            <div className="skill">
                <img src={require('../../images/express.png')} />
                <p>ExpressJS</p>
            </div>
            <div className="skill">
                <img src={require('../../images/knexjs.png')} />
                <p>KnexJS</p>
            </div>
            <div className="skill">
                <img src={require('../../images/git.png')} />
                <p>Git</p>
            </div>
            <div className="skill">
                <img src={require('../../images/github.png')} />
                <p>GitHub</p>
            </div>
            <div className="skill">
                <img src={require('../../images/docker.png')} />
                <p>Docker</p>
            </div>
            <div className="skill">
                <img src={require('../../images/swagger.png')} />
                <p>Swagger</p>
            </div>
            <div className="skill">
                <img src={require('../../images/typescript.png')} />
                <p>Typescript</p>
            </div>
        </div>
    </div>
}